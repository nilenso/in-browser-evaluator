(ns in-browser-evaluator.views
  (:require
   [re-frame.core :as re-frame]
   [in-browser-evaluator.subs :as subs]
   ["react-codemirror2" :as codemirror]
   ["codemirror/mode/clojure/clojure"]
   ["codemirror/keymap/emacs"]
   [reagent.core :as reagent]
   [cljs.reader :as r]))

(defn editor []
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
                          (re-frame/dispatch [:load-editor-content]))
      :on-before-change (fn [_ _ value]
                          (re-frame/dispatch [:set-editor-content value]))}]))

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

(defn test-results []
  (let [test-results (re-frame/subscribe [::subs/test-results])]
    [:div
     [:h2 "Test Results:"]
     [progress-bar @test-results]
     [:ul
      (for [{:keys [prompt result] :as test} @test-results]
        ^{:key (str (random-uuid))}
        [:li.fade-in
         {:class (if (true? result) "green" "red")}
         (str prompt ": " result)])]]))

(defn header []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [:div
     [:div.header
      [:img {:src "https://nilenso.com/nilenso-200.png"}]
      [:h1 "nilenso/mars-rover"]]
     [:div.navigation
      [:a (if (= @active-panel :problem) {} {:href "#/problem"}) "Problem"]
      [:span " | "]
      [:a (if (= @active-panel :home-panel) {} {:href "#/"}) "Solution"]]]))

(defn show-eval-result [eval-result]
  (cond
    (some? (:error eval-result))
    [:code (with-out-str (cljs.pprint/pprint eval-result))]

    (nil? (:value eval-result))
    "nil"

    :else
    (str (:value eval-result))))

(defn results []
  (let [eval-result (re-frame/subscribe [::subs/eval-result])]
    [:div.results
     [:div.eval-result
      [:h2 "Eval Result:"]
      [:p {} (show-eval-result @eval-result)]]
     [:div.test-results
      [test-results]]]))

(defn home-panel []
  [:div.page
   [header]
   [:p "Press Ctrl/Cmd+Enter to run code."]
   [:div.panes
    [editor]
    [results]]])

;; about

(defn problem-statement []
  [:div.page
   [header]
   [:h2 "Problem Statement"]
   [:i "A squad of robotic rovers are to be landed by NASA on a plateau on Mars."]
   [:p "This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth.
A rover's position is represented by a combination of an x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot."]
   [:p
    "'M' means move forward one grid point, and maintain the same heading."
    [:br]
    "Assume that the square directly North from (x, y) is (x, y+1). "]
   [:p
    [:strong "Input:"]
    [:br]
    [:p "The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0. The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation. Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving."]]
   [:p
    [:strong "Output:"]
    [:br]
    [:p "The output for each rover should be its final coordinates and heading."]]
   [:ul "Test Inputs:"
    [:li "5 5 1 2 N LMLMLMLMM"]
    [:li "5 5 3 3 E MMRMMRMRRM"]]
   [:ul "Expected Outputs:"
    [:li "1 3 N"]
    [:li "5 1 E "]]])

;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :problem [problem-statement]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
