(ns in-browser-evaluator.events
  (:require
   [re-frame.core :as re-frame]
   [in-browser-evaluator.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [in-browser-evaluator.evaluator :as evaluator]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn-traced [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
 :set-editor-content
 (fn [db [_ value]]
   (assoc db :editor-content value)))

(re-frame/reg-event-fx
 :eval
 (fn [{:keys [db] :as cofx} [_ value]]
   (evaluator/eval! (get-in db [:editor-content])
                   #(re-frame/dispatch [:set-eval-result %]))))

(re-frame/reg-event-db
 :set-eval-result
 (fn [db [_ value]]
   (assoc db :eval-result value)))
