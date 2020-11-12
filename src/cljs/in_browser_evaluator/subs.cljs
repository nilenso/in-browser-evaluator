(ns in-browser-evaluator.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
 ::editor-content
 (fn [db _]
   (:editor-content db)))

(re-frame/reg-sub
 ::eval-result
 (fn [db _]
   (:eval-result db)))
