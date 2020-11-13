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
   (.setItem js/localStorage "editor-content" value)
   (assoc db :editor-content value)))

(re-frame/reg-event-db
 :load-editor-content
 (fn [db _]
   (assoc db :editor-content (.getItem js/localStorage "editor-content"))))

(re-frame/reg-event-fx
 :eval
 (fn [{:keys [db] :as cofx} [_ value]]
   (let [eval-id (str (random-uuid))]
     (evaluator/eval! eval-id
                      (get-in db [:editor-content])
                      #(re-frame/dispatch [:set-eval-result eval-id %]))
     {})))

(re-frame/reg-event-fx
 :run-tests
 (fn [_ [_ eval-id]]
   (evaluator/run-tests eval-id)
   {}))

(re-frame/reg-event-fx
 :set-eval-result
 (fn [{:keys [db]} [_ eval-id value]]
   {:db (assoc db
               :eval-result value
               :test-results [])
    :dispatch [:run-tests eval-id]}))

(re-frame/reg-event-db
 :add-test-result
 (fn [db [_ test result]]
   (let [test-result (some? (:value result))]
     (update db :test-results conj (assoc test :result test-result)))))
