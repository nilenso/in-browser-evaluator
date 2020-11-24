(ns in-browser-evaluator.assertions)

(def tests
  [{:prompt       "Passes if function navigate exists"
    :assert       '(resolve 'navigate)
    :error-output "function navigate is not defined"}
   {:prompt       "Moves one block for input: 5 5 0 0 N M"
    :assert       '(= (navigate "5 5 0 0 N M") [0 1 "N"])
    :error-output "Expected output: [0 1 \"N\"]"}
   {:prompt       "Moves nowhere for input: 5 5 0 0 N LLLL"
    :assert       '(= (navigate "5 5 0 0 N LLLL") [0 0 "N"])
    :error-output "Expected output: [0 0 \"N\"]"}
   {:prompt       "Doesn't fall off the grid for input: 5 5 0 0 N MMMMMMMMMM"
    :assert       '(= (navigate "5 5 0 0 N MMMMMMMMMM") [0 5 "N"])
    :error-output "Expected output: [0 0 \"N\"]"}
   {:prompt       "Moves far away for input: 5 5 1 2 N LMLMLMLMM"
    :assert       '(= (navigate "5 5 1 2 N LMLMLMLMM") [1 3 "N"])
    :error-output "Expected output: [1 2 \"N\"]"}])
