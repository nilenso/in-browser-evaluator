(ns in-browser-evaluator.evaluator
  (:require [shadow.cljs.bootstrap.browser :as boot]
            [cljs.js :as cljs]
            [cljs.env :as env]
            [re-frame.core :as re-frame]))

(defonce compile-state-ref (env/default-compiler-env))

(defn start []
  (boot/init compile-state-ref
    {:path "/bootstrap"}
    #(js/console.log "evaluator initialised")))

(defn ns-from-id [id]
  (str "mars-rover.core-" id))

(defn eval! [id source cb]
  (let [options {:eval cljs/js-eval
                 :load (partial boot/load compile-state-ref)}
        f (fn [x] (when (:error x)
                     (js/console.error (ex-cause (:error x))))
            (tap> x) (cb x))]
    (cljs/eval-str compile-state-ref (str "(ns " (ns-from-id id) ")" source) "[test]" options f)))

(def tests
  [{:prompt "The function foo exists" :assert '(resolve 'foo)}
   {:prompt "Passes for input: 5 5 1 2 N LMLMLMLMM" :assert '(= (navigate "5 5 1 2 N LMLMLMLMM")
                                                                [1 3 "N"])}])

(defn run-tests [id]
  (doall
   (for [{:keys [assert prompt] :as test} tests
         :let [wrapped-assert (str "(try "assert " (catch js/TypeError e false))")]]
     (eval! id (str wrapped-assert) #(re-frame/dispatch [:add-test-result test %])))))
