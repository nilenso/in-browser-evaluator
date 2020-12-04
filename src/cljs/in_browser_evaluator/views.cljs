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
  (let [active-page (re-frame/subscribe [::subs/active-page])]
    [:div
     [:div.header
      [:img {:src "https://nilenso.com/nilenso-200.png"}]
      [:h1 "nilenso/evaluator"]]
     [:div.header-container
      [problem-chooser]
      [:div.links
       [:a.link-to-primer
        {:href "https://gist.github.com/sezaljain/b3daea74ff6f59790b0f669fbf2105ff"
         :target "_blank"}
        "Clojure primer"]
       [:span " | "]
       (case @active-page
         :problem
         [:a.link-to-faqs
          {:href "" :on-click (fn [e] (re-frame/dispatch [:set-active-page :faq]) (.preventDefault e))}
          "FAQs"]

         :faq
         [:a.link-to-problem
          {:href "" :on-click (fn [e] (re-frame/dispatch [:set-active-page :problem]) (.preventDefault e))}
          "Go back to problems"])]]]))

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

(defn faq []
  [:div.page.faq
   [header]
   [:div.problem
    [:h2 "FAQs on the evaluator"]
    [:ul.questions
     [:li
      [:p.question "How do I run the evaluator and tests?"]
      [:p.answer "To run the evaluator, press crtl+enter (Windows/Linux) or cmd+enter (on a Mac) while the cursor is still in the editing panel. If it still does not work,please report any errors you see in the console."]]

     [:li
      [:p.question "How do I use dependencies or other namespaces in my code? "]
      [:p.answer "On the evaluator, you can use other namespaces like clojure.string: (clojure.string/split \"3 4 5\" #\" \"). However, you cannot use the namespace declaration in the evaluator itself."]]

     [:li
      [:p.question "I am not able to see my print output (stdout) in the console"]
      [:p.answer "To see the stdout, you will have to open the developer console in the browser. Generally, pressing F12 should open it. You can read about how to open it in "
       [:a {:target "_blank" :href "https://developers.google.com/web/tools/chrome-devtools/open#:~:text=Press%20Command%20%2B%20Option%20%2B%20J%20(,straight%20into%20the%20Console%20panel"} "Chrome"]
       [:span ", "]
       [:a {:target "_blank" :href "https://developer.mozilla.org/en-US/docs/Tools#:~:text=You%20can%20open%20the%20Firefox,%2B%20Opt%20%2B%20I%20on%20macOS"} "Firefox"]
       [:span " and, "]
       [:a {:target "_blank" :href "https://docs.microsoft.com/en-us/previous-versions/windows/desktop/legacy/hh968260(v=vs.85)"} "Internet Explorer."]] ]

     [:li
      [:p.question "Not all tests are passing, what do I do?"]
      [:p.answer "Even if you don't get all tests passing. Please submit your code. We want to see any code, and are not looking for 100% correctness."]]

     [:li
      [:p.question "I'm stuck on a problem, and unable to solve it, what do I do?"]
      [:p.answer "If you're stuck on a problem, consider submitting your solution as-is, and moving on to the next problem."]]]]])

(defn main []
  (let [active-page (re-frame/subscribe [::subs/active-page])]
    (case @active-page
      :problem [page]
      :faq [faq])))
