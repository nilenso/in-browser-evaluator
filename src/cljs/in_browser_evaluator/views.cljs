(ns in-browser-evaluator.views
  (:require
   [re-frame.core :as re-frame]
   [in-browser-evaluator.subs :as subs]
   ["react-codemirror2" :as codemirror]
   ["codemirror/mode/clojure/clojure"]
   ["codemirror/keymap/emacs"]
   [reagent.core :as reagent]
   [cljs.reader :as r]
   [cljs.pprint :as pprint]
   [in-browser-evaluator.problems :as problems]))

(defn editor [problem]
  (let [content (re-frame/subscribe [::subs/editor-content])]
    [:> (:Controlled (js->clj codemirror :keywordize-keys true))
     {:value @content
      :options (clj->js {:mode "text/x-clojurescript"
                         :keyMap "emacs"
                         :theme "base16-light"
                         :lineNumbers true
                         :extraKeys {"Ctrl-Enter" #(re-frame/dispatch [:eval])
                                     "Cmd-Enter" #(re-frame/dispatch [:eval])}})
      :editor-did-mount (fn [_]
                          (re-frame/dispatch [:load-editor-content problem]))
      :on-before-change (fn [_ _ value]
                          (re-frame/dispatch [:set-editor-content problem value]))}]))

(defn progress-bar [test-results]
  (let [total (count test-results)
        passed (count (filter true? (map :result test-results)))
        red "#f8337d"
        green "#339933"]
    [:div.progress-bar
     [:p {:style {:border-top "2px dashed"
                  :border-color green
                  :width (str (* 99 (/ passed total)) "%")}}]
     [:p {:style {:border-top "2px dashed"
                  :border-color red
                  :width (str (* 99 (/ (- total passed) total)) "%")}}]]))

(defn test-results [problem]
  (let [test-results (re-frame/subscribe [::subs/test-results])]
    [:div
     [:h2 "Test Results:"]
     [progress-bar @test-results]
     [:ul
      (for [{:keys [prompt result] :as test} @test-results]
        ^{:key (str (random-uuid))}
        [:li.fade-in
         {:class (if (true? result) "green" "red")}
         (str prompt ": " (if (true? result) "passed" "failed"))])]]))

(defn problem-chooser []
  (let [active-problem (re-frame/subscribe [::subs/active-problem])]
    [:div.problem-chooser
     [:label {:for "problem-chooser"} "Choose a problem: "]
     [:select {:id "problem-chooser"
               :value (or @active-problem (:name (first problems/problems)))
               :on-change (fn [this] (re-frame/dispatch [:set-active-problem (keyword (.. this -target -value))]))}
      (doall
       (for [[i problem] (mapv (fn [n p] [n p]) (range) problems/problems)]
         ^{:key (str (random-uuid))}
         [:option
          {:value (:name problem)}
          (str (inc i) ": " (:display-name problem))]))]]))

(defn header []
  [:div
   [:div.header
    [:img {:src "https://nilenso.com/nilenso-200.png"}]
    [:h1 "nilenso/evaluator"]]
   [:div.header-container
    [problem-chooser]
    [:a.link-to-primer
     {:href "https://gist.github.com/sezaljain/b3daea74ff6f59790b0f669fbf2105ff"
      :target "_blank"}
     "Clojure primer"]]])

(defn show-eval-result [problem eval-result]
  (cond
    (some? (:error eval-result))
    [:code (with-out-str (pprint/pprint eval-result))]

    (nil? (:value eval-result))
    "nil"

    :else
    (str (:value eval-result))))

(defn results [problem]
  (let [eval-result (re-frame/subscribe [::subs/eval-result])]
    [:div.results
     [:div.eval-result
      [:h2 "Eval Result:"]
      [:p {} (show-eval-result problem @eval-result)]]
     [:div.test-results
      [test-results problem]]]))

(defn page []
  (let [active-problem (re-frame/subscribe [::subs/active-problem])
        problem-collapsed? (re-frame/subscribe [::subs/problem-collapsed?])
        problem (problems/find-problem @active-problem)]
    [:div.page
     [header]
     [:div.problem
      [:h2 (:display-name problem)
       (if @problem-collapsed?
         [:a.collapser {:href "" :on-click #(do (re-frame/dispatch [:expand-problem])
                                                (.preventDefault %))}
          "[...]"]
         [:a.collapser {:href "" :on-click  #(do (re-frame/dispatch [:collapse-problem])
                                                 (.preventDefault %))}
          "[–]"])]
      (when-not @problem-collapsed?
        [(:problem-statement problem)])
      [:div
       [:div.panes
        [editor @active-problem]
        [results @active-problem]]
       [:p "Press Ctrl/Cmd+Enter to run code. Press F12 to see stdout."]]]]))
