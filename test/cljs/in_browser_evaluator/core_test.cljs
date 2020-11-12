(ns in-browser-evaluator.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [in-browser-evaluator.core :as core]))

(deftest fake-test
  (testing "fake description"
    (is (= 1 2))))
