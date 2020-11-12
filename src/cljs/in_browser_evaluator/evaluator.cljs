(ns in-browser-evaluator.evaluator
  (:require [shadow.cljs.bootstrap.browser :as boot]
            [cljs.js :as cljs]
            [cljs.env :as env]))

(defonce compile-state-ref (env/default-compiler-env))

(defn start []
  (boot/init compile-state-ref
    {:path "/bootstrap"}
    #(js/console.log "evaluator initialised")))

(defn eval! [source cb]
  (let [options {:eval cljs/js-eval
                 ;; use the :load function provided by shadow-cljs, which uses the bootstrap build's
                 ;; index.transit.json file to map namespaces to files.
                 :load (partial boot/load compile-state-ref)}
        f (fn [x] (when (:error x)
                     (js/console.error (ex-cause (:error x))))
            (tap> x) (cb x))]
    (cljs/eval-str compile-state-ref (str source) "[test]" options f)))
