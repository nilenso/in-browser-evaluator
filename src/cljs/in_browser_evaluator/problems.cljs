(ns in-browser-evaluator.problems)

(def mars-rover-tests
  [{:prompt       "Passes if function navigate exists"
    :assert       '(resolve 'navigate)
    :error-output "function navigate is not defined"}
   {:prompt       "Moves one block for input: 5 5 0 0 N M"
    :assert       '(= (navigate "5 5 0 0 N M") [0 1 "N"])
    :error-output "Expected output: [0 1 \"N\"]"}
   {:prompt       "Turn left for input: 5 5 0 0 N L"
    :assert       '(= (navigate "5 5 0 0 N L") [0 0 "W"])
    :error-output "Expected output: [0 0 \"W\"]"}
   {:prompt       "Turn Right for input: 5 5 0 0 N R"
    :assert       '(= (navigate "5 5 0 0 N L") [0 0 "E"])
    :error-output "Expected output: [0 0 \"E\"]"}
   {:prompt       "Moves nowhere for input: 5 5 0 0 N LR"
    :assert       '(= (navigate "5 5 0 0 N LR") [0 0 "N"])
    :error-output "Expected output: [0 0 \"N\"]"}
   {:prompt       "Doesn't fall off the grid for input: 5 5 0 0 N MMMMMMMMMM"
    :assert       '(= (navigate "5 5 0 0 N MMMMMMMMMM") [0 5 "N"])
    :error-output "Expected output: [0 0 \"N\"]"}
   {:prompt       "Moves far away for input: 5 5 1 2 N LMLMLMLMM"
    :assert       '(= (navigate "5 5 1 2 N LMLMLMLMM") [1 3 "N"])
    :error-output "Expected output: [1 2 \"N\"]"}])

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
   [:p
    [:strong "Input:"]
    [:br]
    [:p "The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0. The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation. Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving."]]
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

(def multiply-by-10-tests
  [{:prompt       "Function named multiply-by-10 must exist"
    :assert       '(resolve 'multiply-by-10)
    :error-output "Function multiply-by-10 is not defined"}

   {:prompt       "Multiplying by 0 works"
    :assert       '(= 0 (multiply-by-10 0))
    :error-output "Expectd output: 0"}

   {:prompt       "Multiplying by 1 works"
    :assert       '(= 10 (multiply-by-10 1))
    :error-output "Expected output: 10"}

   {:prompt       "Multiplying by 42 works"
    :assert       '(= 420 (multiply-by-10 42))
    :error-output "Expected output: 420"}])

(def problems
  [{:name :multiply-by-10
    :display-name "Multiply by 10"
    :tests multiply-by-10-tests
    :problem-statement multiply-by-10-problem-statement}

   {:name :mars-rover
    :display-name "Mars Rover"
    :tests mars-rover-tests
    :problem-statement mars-rover-problem-statement}])

(defn find-problem [problem-name]
  (first (filter #(= (:name %) problem-name) problems)))
