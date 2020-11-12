(ns in-browser-evaluator.views
  (:require
   [re-frame.core :as re-frame]
   [in-browser-evaluator.subs :as subs]
   ["react-codemirror2" :as codemirror]
   ["codemirror/mode/clojure/clojure"]
   [reagent.core :as reagent]
   [cljs.reader :as r]))

(defn editor []
  (let [content (re-frame/subscribe [::subs/editor-content])]
    [:> (:Controlled (js->clj codemirror :keywordize-keys true))
     {:value @content
      :options (clj->js {:mode "clojure"
                         :lineNumbers true
                         :extraKeys {"Ctrl-Enter" #(re-frame/dispatch [:eval])
                                     "Cmd-Enter" #(re-frame/dispatch [:eval])}})
      :on-before-change (fn [_ _ value]
                          (re-frame/dispatch [:set-editor-content value]))
      :on-change (fn [ed arg2 value]
                   #_(js/alert (eval (r/read-string value)))
                   nil)}]))

(defn home-panel []
  (let [eval-result (re-frame/subscribe [::subs/eval-result])]
    [:div
     [:h1 "Mars Rover Evaluator"]
     #_[:a {:href "#/about"} "go to About Page"]
     [:h2 "Write your code here"]
     [:button {:on-click #(re-frame/dispatch [:eval])} "Eval"]
     [editor]
     [:div
      [:h2 "Result"]
      [:p (:value @eval-result)]]]))

;; about

(defn about-panel []
  [:div
   [:h1 "This is the About Page."]

   [:div
    [:a {:href "#/"}
     "go to Home Page"]]])


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
