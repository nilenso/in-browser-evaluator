(ns in-browser-evaluator.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [in-browser-evaluator.events :as events]
   [in-browser-evaluator.routes :as routes]
   [in-browser-evaluator.views :as views]
   [in-browser-evaluator.config :as config]
   [in-browser-evaluator.evaluator :as evaluator]))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main] root-el)))

(defn init []
  (routes/app-routes)
  (evaluator/start)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
