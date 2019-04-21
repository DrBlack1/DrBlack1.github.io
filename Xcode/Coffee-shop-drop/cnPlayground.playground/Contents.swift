//: Playground - noun: a place where people can play

import UIKit


//: If you have written code in C or Objective-C, this syntax looks familiar to you—in Swift, this line of code is a complete program. You don’t need to import a separate library for functionality like input/output or string handling. Code written at global scope is used as the entry point for the program, so you don’t need a `main()` function. You also don’t need to write semicolons at the end of every statement.
//:
//: This tour gives you enough information to start writing code in Swift by showing you how to accomplish a variety of programming tasks. Don’t worry if you don’t understand something—everything introduced in this tour is explained in detail in the rest of this book.
//:
//: ## Simple Values
//:
//: Use `let` to make a constant and `var` to make a variable. The value of a constant doesn’t need to be known at compile time, but you must assign it a value exactly once. This means you can use constants to name a value that you determine once but use in many places.
//:
var Rabbit = 42
Rabbit = 50
let Hamster = 42

//Experiment : Try to give Hamster a new value

//: A constant or variable must have the same type as the value you want to assign to it. However, you don’t always have to write the type explicitly. Providing a value when you create a constant or variable lets the compiler infer its type. In the example above, the compiler infers that `myVariable` is an integer because its initial value is an integer.
//:
//: If the initial value doesn’t provide enough information (or if there is no initial value), specify the type by writing it after the variable, separated by a colon.
//:
let oero = "Sherlock"
let implicitDouble = 70.0
let oreo2: Float = 9

//: - Experiment:
//: Create a constant with an explicit type of `Float` and a value of `4`.
//:


//: Values are never implicitly converted to another type. If you need to convert a value to a different type, explicitly make an instance of the desired type.
//:
let label = "The width is "
let width = 94
let widthLabel = label + String(width)

//: - Experiment:
//: Try removing the conversion to `String` from the last line. What error do you get?
//:
//: There’s an even simpler way to include values in strings: Write the value in parentheses, and write a backslash (`\`) before the parentheses. For example:
//:
var apples = 5
let oranges = 5
let name = "bob"

let appleSummary = "I have \(apples) apples."
let fruitSummary = "I have \(apples + oranges) pieces of fruit."
let appleSummary1 = "I have 3 apples"

//: - Experiment:
//: Use `\()` to include a floating-point calculation in a string and to include someone’s name in a greeting.

let nameNow = "Sherlock"
let carrots = 3

let goodline = "my name is \(nameNow) and I have \(carrots) carrots."


//:
//: Use three double quotation marks (`"""`) for strings that take up multiple lines. Indentation at the start of each quoted line is removed, as long as it matches the indentation of the closing quotation marks. For example:
//:
let quotation = """
I said "I have \(apples) apples."
And then I said "I have \(apples + oranges) pieces of fruit."
"""

//: Create arrays and dictionaries using brackets (`[]`), and access their elements by writing the index or key in brackets. A comma is allowed after the last element.
//:
var shoppingList = ["catfish", "water", "tulips", "blue paint"]
shoppingList[1] = "coke"

var occupations = [
    "Malcolm": "Captain",
    "Kaylee": "Mechanic",
]
occupations["Jayne"] = "Public Relations"

//: To create an empty array or dictionary, use the initializer syntax.
//:
let emptyArray = [String]()
let emptyDictionary = [String: Float]()

//: If type information can be inferred, you can write an empty array as `[]` and an empty dictionary as `[:]`—for example, when you set a new value for a variable or pass an argument to a function.
//:
shoppingList = []
occupations = [:]

//: ## Control Flow
//:
//: Use `if` and `switch` to make conditionals, and use `for`-`in`, `while`, and `repeat`-`while` to make loops. Parentheses around the condition or loop variable are optional. Braces around the body are required.
//:
let individualScores = [75, 43, 103, 87, 12]
var teamScore = 0
for score in individualScores {
    if score > 50 {
        teamScore += 3
    } else {
        teamScore += 1
    }
}
print(teamScore)


//: In an `if` statement, the conditional must be a Boolean expression—this means that code such as `if score { ... }` is an error, not an implicit comparison to zero.
//:
//: You can use `if` and `let` together to work with values that might be missing. These values are represented as optionals. An optional value either contains a value or contains `nil` to indicate that a value is missing. Write a question mark (`?`) after the type of a value to mark the value as optional.
//:
var optionalString: String? = "Hello"
print(optionalString == nil)

var optionalName: String? = "John Appleseed"
var greeting = "Hello!"
if let name = optionalName {
    greeting = "Hello, \(name)"
}

//: - Experiment:
//: Change `optionalName` to `nil`. What greeting do you get? Add an `else` clause that sets a different greeting if `optionalName` is `nil`.
//:
//: If the optional value is `nil`, the conditional is `false` and the code in braces is skipped. Otherwise, the optional value is unwrapped and assigned to the constant after `let`, which makes the unwrapped value available inside the block of code.
//:
//: Another way to handle optional values is to provide a default value using the `??` operator. If the optional value is missing, the default value is used instead.
//:
let nickName: String? = nil
let fullName: String = "John Appleseed"
let informalGreeting = "Hi \(nickName ?? fullName)"

//: Switches support any kind of data and a wide variety of comparison operations—they aren’t limited to integers and tests for equality.
//:
let vegetable = "celery"
switch vegetable {
case "celery":
    print("Add some raisins and make ants on a log.")
case "cucumber", "watercress":
    print("That would make a good tea sandwich.")
    

    
case let x where x.hasSuffix("lol"):
    print("Is it a spicy \(x)?")
default:
    print("Everything tastes good in soup.")
}

//: - Experiment:
//: Try removing the default case. What error do you get?
//:
//: Notice how `let` can be used in a pattern to assign the value that matched the pattern to a constant.
//:
//: After executing the code inside the switch case that matched, the program exits from the switch statement. Execution doesn’t continue to the next case, so there is no need to explicitly break out of the switch at the end of each case’s code.
//:
//: You use `for`-`in` to iterate over items in a dictionary by providing a pair of names to use for each key-value pair. Dictionaries are an unordered collection, so their keys and values are iterated over in an arbitrary order.
//:
let interestingNumbers = [
    "Prime": [2, 3, 5, 7, 11, 13],
    "Fibonacci": [1, 1, 2, 3, 5, 8],
    "Square": [1, 4, 9, 16, 25],
]
var largest = 0
for (kind, numbers) in interestingNumbers {
    for number in numbers {
        if number > largest {
            largest = number
        }
    }
}
print(largest)

//: - Experiment:
//: Add another variable to keep track of which kind of number was the largest, as well as what that largest number was.
//:
//: Use `while` to repeat a block of code until a condition changes. The condition of a loop can be at the end instead, ensuring that the loop is run at least once.
//:
var n = 2
while n < 100 {
    n *= 2
}
print(n)

var m = 2
repeat {
    m *= 2
} while m < 100
print(m)

//: You can keep an index in a loop by using `..<` to make a range of indexes.
//:
var total = 0
for i in 0..<4 {
    total += i
}
print(total)

//: Use `..<` to make a range that omits its upper value, and use `...` to make a range that includes both values.
//:


//: [Previous](@previous) | [Next](@next)

