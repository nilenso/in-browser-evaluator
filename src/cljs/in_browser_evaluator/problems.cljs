(ns in-browser-evaluator.problems)

(def mars-rover-tests
  [{:prompt       "Passes if function navigate exists"
    :assert       '(resolve 'navigate)
    :error-output "function navigate is not defined"}
   {:prompt       "Moves one block for input: 5 5 0 0 N M"
    :assert       '(= (navigate 5 5 0 0 "N" "M") [0 1 "N"])
    :error-output "Expected output: [0 1 \"N\"]"}
   {:prompt       "Turn left for input: 5 5 0 0 N L"
    :assert       '(= (navigate 5 5 0 0 "N" "L") [0 0 "W"])
    :error-output "Expected output: [0 0 \"W\"]"}
   {:prompt       "Turn Right for input: 5 5 0 0 N R"
    :assert       '(= (navigate 5 5 0 0 "N" "R") [0 0 "E"])
    :error-output "Expected output: [0 0 \"E\"]"}
   {:prompt       "Moves nowhere for input: 5 5 0 0 N LR"
    :assert       '(= (navigate 5 5 0 0 "N" "LR") [0 0 "N"])
    :error-output "Expected output: [0 0 \"N\"]"}
   {:prompt       "Moves far away for input: 5 5 1 2 N LMLMLMLMM"
    :assert       '(= (navigate 5 5 1 2 "N" "LMLMLMLMM") [1 3 "N"])
    :error-output "Expected output: [1 2 \"N\"]"}
   {:prompt       "Doesn't fall off the grid for input: 5 5 0 0 N MMMMMMMMMM"
    :assert       '(= (navigate 5 5 0 0 "N" "MMMMMMMMMM") [0 5 "N"])
    :error-output "Expected output: [0 5 \"N\"]"}])

(defn mars-rover-problem-statement []
  [:div.problem-statement
   [:i "A squad of robotic rovers are to be landed by NASA on a plateau on Mars."]
   [:p "This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth.
A rover's position is represented by a combination of an x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot."]
   [:p
    "'M' means move forward one grid point, and maintain the same heading."
    [:br]
    "Assume that the square directly North from (x, y) is (x, y+1). "]
   [:div
    [:strong "Input:"]
    [:br]
    [:p "The first 2 numbers are the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0. The next 3 inputs are information pertaining to the rover coordinates, and it's current orientation. After that is a series of instructions telling the rover how to explore the plateau."]]
   [:p
    [:strong "Output:"]
    [:br]
    [:p "The output for each rover should be its final coordinates and heading."]]
   [:ul "Test Inputs:"
    [:li "5 5 1 2 N LMLMLMLMM"]
    [:li "5 5 3 3 E MMRMMRMRRM"]]
   [:ul "Expected Outputs:"
    [:li "1 3 N"]
    [:li "5 1 E "]]])

(defn multiply-by-10-problem-statement []
  [:div.problem-statement
   [:p "Write a function called multiply-by-10 that takes a single argument and multiplies it by 10."]])

(defn filter-even-strings-problem-statement []
  [:div.problem-statement
   [:p "Write a function to filter all strings of even length in a given vector."]])

(defn capitalize-even-strings-problem-statement []
  [:div.problem-statement
   [:p "Write a function to capitalize all strings of even length in a given vector. The function should also remove any strings of odd length."]])

(defn concat-string-problem-statement []
  [:div.problem-statement
   [:p "Write a function called `concat-string` using the function `reduce`, that takes in a vector of strings and concatenates them."]])

(defn map-by-reduce-problem-statement []
  [:div.problem-statement
   [:p "Write a function called `map-by-reduce` using the function `reduce`, that behaves exactly like map. It takes in a function and vector as arguments. Do not use the functions (map, pmap, mapv)."]
   [:p "To test: (= [3 4 5] (map-by-reduce (fn [v] (+ 2 v)) [1 2 3]))"]
   [:em "Hint: `conj` is used to append an element to a vector."]])

(defn filter-by-reduce-problem-statement []
  [:div.problem-statement
   [:p "Write a function called `filter-by-reduce` using the function `reduce`, that behaves exactly like filter. It takes in a predicate function and vector as arguments. Do not use the `filter` function."]
   [:p "To test: (= [3 4] (filter-by-reduce (fn [v] (> v 2)) [1 2 3 2 4]))"]
   [:em "Hint: lookup `filter`"]])

(defn venus-sensor-problem-statement []
  [:div.problem-statement
   [:p "Earth is destroyed."]
   [:p "We are holding out on our base on Mars but the situation here is quite fragile, we need other options. We have sent a sensor to Venus to gather temperature data. However, since the bandwidth between Venus and Mars is fairly limited, we need to send aggregated information across."]
   [:p "We need you to build a function that groups the temperature readings by the smallest multiple of 10 larger than the reading."]
   [:br]
   [:p "Write a function called `venus-sensor` that will take the temperatures, and return the aggregated data."]

   [:p "Example input: [1 88 12 83 18 76]"]
   [:p "Example output: {10 1, 20 2, 80 1, 90 2}"]
   [:em "Hint: {} represents a map "
    [:a {:href "https://clojure.org/guides/learn/hashed_colls#_maps"}
     "https://clojure.org/guides/learn/hashed_colls#_maps"]]])


(defn assertion-for-function-exists [fn-name assertion]
  {:prompt       (str "Function named " fn-name " must exist")
   :assert       assertion
   :error-output (str "Function " fn-name " is not defined")})

(def multiply-by-10-tests
  [(assertion-for-function-exists
    "multiply-by-10"
    '(resolve 'multiply-by-10))

   {:prompt       "Multiplying by 0 works"
    :assert       '(= 0 (multiply-by-10 0))
    :error-output "Expectd output: 0"}

   {:prompt       "Multiplying by 1 works"
    :assert       '(= 10 (multiply-by-10 1))
    :error-output "Expected output: 10"}

   {:prompt       "Multiplying by 42 works"
    :assert       '(= 420 (multiply-by-10 42))
    :error-output "Expected output: 420"}])

(def filter-even-strings-tests
  [(assertion-for-function-exists
    "filter-even-strings"
    '(resolve 'filter-even-strings))

   {:prompt       "Keep the string 'even'"
    :assert       '(= ["even"] (filter-even-strings ["even"]))
    :error-output "The string 'even' is not present in the output"}

   {:prompt       "Keep the string 'even' and removes 'odd'"
    :assert       '(= ["even"] (filter-even-strings ["even" "odd"]))
    :error-output "The string 'even' is not present in the output"}

   {:prompt       "Keep the string 'even' and 'same' removes 'odd'"
    :assert       '(= ["even" "same"] (filter-even-strings ["even" "odd" "same"]))
    :error-output (str "Expected output: " ["even" "same"])}])

(def capitalize-even-strings-tests
  [(assertion-for-function-exists
    "capitalize-even-strings"
    '(resolve 'capitalize-even-strings))

   {:prompt       "Keep the string 'even'"
    :assert       '(= ["even"] (filter-even-strings ["even"]))
    :error-output "The string 'even' is not present in the output"}

   {:prompt       "Keep the string 'even' and removes 'odd'"
    :assert       '(= ["even"] (filter-even-strings ["even" "odd"]))
    :error-output "The string 'even' is not present in the output"}

   {:prompt       "Keep the string 'even' and 'same' removes 'odd'"
    :assert       '(= ["even" "same"] (filter-even-strings ["even" "odd" "same"]))
    :error-output (str "Expected output: " ["even" "same"])}])

(def concat-string-tests
  [(assertion-for-function-exists
    "concat-strings"
    '(resolve 'concat-strings))

   {:prompt "Concat 'thunder' 'and' 'lightning'"
    :assert '(= (concat-strings ["thunder" "and" "lightning"]) "thunderandlightning")
    :error-output "Expected output: thunderandlightning"}])

(def map-by-reduce-tests
  [(assertion-for-function-exists
    "map-by-reduce"
    '(resolve 'map-by-reduce))

   {:prompt "(map-by-reduce inc [1 2 3]) returns [2 3 4]"
    :assert '(= (map-by-reduce inc [1 2 3]) [2 3 4])
    :error-output "Expected output: [2 3 4]"}

   {:prompt "(map-by-reduce dec [10 100 1000]) returns [9 99 999]"
    :assert '(= (map-by-reduce dec [10 100 1000]) [9 99 999])
    :error-output "Expected output: [9 99 999]"}])

(def filter-by-reduce-tests
  [(assertion-for-function-exists
    "filter-by-reduce"
    '(resolve 'filter-by-reduce))

   {:prompt "(filter-by-reduce even? [1 2 3]) returns [2]"
    :assert '(= (filter-by-reduce even? [1 2 3]) [2])
    :error-output "Expected output: [2]"}

   {:prompt "(filter-by-reduce true? [true false true]) returns [true true]"
    :assert '(= (filter-by-reduce true? [true false true]) [true true])
    :error-output "Expected output: [true true]"}])

(def venus-sensor-tests
  [(assertion-for-function-exists
     "venus-sensor"
     '(resolve 'venus-sensor))

   {:prompt "(venus-sensor [1 11 23]) returns {10 1 20 1 30 1}"
    :assert '(= (venus-sensor [1 11 23]) {10 1 20 1 30 1})}

   {:prompt "(venus-sensor [1 88 12 83 18 76]) returns {10 1, 20 2, 80 1, 90 2}"
    :assert '(= (venus-sensor [1 88 12 83 18 76]) {10 1, 20 2, 80 1, 90 2})}])

(def problems
  [{:name :multiply-by-10
    :display-name "Multiply by 10"
    :tests multiply-by-10-tests
    :problem-statement multiply-by-10-problem-statement}

   {:name :filter-even-strings
    :display-name "Filter strings of even length"
    :tests filter-even-strings-tests
    :problem-statement filter-even-strings-problem-statement}

   {:name :capitalize-even-strings
    :display-name "Capitalize even strings"
    :tests capitalize-even-strings-tests
    :problem-statement capitalize-even-strings-problem-statement}

   {:name :concat-string
    :display-name "Concat Strings"
    :tests concat-string-tests
    :problem-statement concat-string-problem-statement}

   {:name :map-by-reduce
    :display-name "Map using reduce"
    :tests map-by-reduce-tests
    :problem-statement map-by-reduce-problem-statement}

   {:name :filter-by-reduce
    :display-name "Filter using reduce"
    :tests filter-by-reduce-tests
    :problem-statement filter-by-reduce-problem-statement}

   {:name :venus-sensor
    :display-name "Venus Sensor"
    :tests venus-sensor-tests
    :problem-statement venus-sensor-problem-statement}

   {:name :mars-rover
    :display-name "Mars Rover"
    :tests mars-rover-tests
    :problem-statement mars-rover-problem-statement}])

(defn find-problem [problem-name]
  (first (filter #(= (:name %) problem-name) problems)))
