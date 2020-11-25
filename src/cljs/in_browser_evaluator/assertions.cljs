(ns in-browser-evaluator.assertions
  (:require [cljs.test :refer-macros [deftest testing is]]))

(defn cljs-rover-tests []
  (quote
   (do
     (require '[cljs.test :as t])
     (require 'mars-rover.core)
     (t/deftest rover-tests
       (t/testing "Navigate exists"
         (t/is (resolve 'mars-rover.core/navigate)))))))
