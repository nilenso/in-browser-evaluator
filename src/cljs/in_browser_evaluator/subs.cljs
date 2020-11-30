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
 ::active-problem
 (fn [db _]
   (:active-problem db)))

(re-frame/reg-sub
 ::editor-content
 (fn [{:keys [active-problem] :as db} _]
   (get-in db [active-problem :editor-content])))

(re-frame/reg-sub
 ::eval-result
 (fn [{:keys [active-problem] :as db} _]
   (get-in db [active-problem :eval-result])))

(re-frame/reg-sub
 ::test-results
 (fn [{:keys [active-problem] :as db} _]
   (get-in db [active-problem :test-results])))
