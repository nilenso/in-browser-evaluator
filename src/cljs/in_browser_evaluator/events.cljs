(ns in-browser-evaluator.events
  (:require
   [re-frame.core :as re-frame]
   [in-browser-evaluator.db :as db]
   [in-browser-evaluator.evaluator :as evaluator]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
 :set-active-problem
 (fn [db [_ active-problem]]
   (assoc db :active-problem active-problem)))

(re-frame/reg-event-db
 :expand-problem
 (fn [db _]
   (assoc db :problem-collapsed? false)))

(re-frame/reg-event-db
 :collapse-problem
 (fn [db _]
   (assoc db :problem-collapsed? true)))

(re-frame/reg-event-db
 :set-editor-content
 (fn [db [_ problem value]]
   (.setItem js/localStorage (str problem "-editor-content") value)
   (assoc-in db [problem :editor-content] value)))

(re-frame/reg-event-db
 :load-editor-content
 (fn [db [_ problem]]
   (assoc-in db [problem :editor-content] (.getItem js/localStorage (str problem "-editor-content")))))

(re-frame/reg-event-fx
 :eval
 (fn [{:keys [db] :as cofx} [_ value]]
   (let [eval-id (str (random-uuid))
         active-problem (:active-problem db)]
     (evaluator/eval! eval-id
                      (get-in db [active-problem :editor-content])
                      #(re-frame/dispatch [:set-eval-result eval-id %]))
     {})))

(re-frame/reg-event-fx
 :run-tests
 (fn [_ [_ problem eval-id]]
   (evaluator/run-tests problem eval-id)
   {}))

(re-frame/reg-event-fx
 :set-eval-result
 (fn [{:keys [db]} [_ eval-id value]]
   (let [active-problem (:active-problem db)]
     {:db (-> db
              (assoc-in [active-problem :eval-result] value)
              (assoc-in [active-problem :test-results] []))
      :dispatch [:run-tests active-problem eval-id]})))

(re-frame/reg-event-db
 :add-test-result
 (fn [db [_ problem test result]]
   (let [test-result (if (:value result) true false)]
     (update-in db [problem :test-results] conj (assoc test :result test-result)))))
