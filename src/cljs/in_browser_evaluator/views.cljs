(ns in-browser-evaluator.views
  (:require
   [re-frame.core :as re-frame]
   [in-browser-evaluator.subs :as subs]
   ["react-codemirror2" :as codemirror]
   ["codemirror/mode/clojure/clojure"]
   [reagent.core :as reagent]
   [cljs.reader :as r]))

(defn home-panel []
  (let [content (re-frame/subscribe [::subs/editor-content])
        textarea-obj (atom nil)]
    [:div
     [:h1 (str "Hello from " ". This is the Home Page.")]
     [:a {:href "#/about"} "go to About Page"]
     [:> (:Controlled (js->clj codemirror :keywordize-keys true))
      {:value @content
       :options (clj->js {:mode "clojure"
                          :lineNumbers true})
       :on-before-change (fn [_ _ value]
                           (re-frame/dispatch [:set-editor-content value]))
       :on-change (fn [ed arg2 value]
                    #_(js/alert (eval (r/read-string value)))
                    nil)}]]))

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
