/*
    Get 2 numbers and use them to sum, 
    subtract, multiply, divide, and get 
    the remainder of a division.

    For each operation, display an alert with the result.
*/

let firstNumber = prompt('Enter the first number:')
let secondNumber = prompt('Enter the second number:')

function checkNumbers(firstNumber, secondNumber) {
	firstNumber = Number(firstNumber)
	secondNumber = Number(secondNumber)

	const sum = firstNumber + secondNumber
	const sub = firstNumber - secondNumber
	const multiply = firstNumber * secondNumber
	const divide = (firstNumber / secondNumber).toFixed(2)
	const divRemain = firstNumber % secondNumber
	let evenOrOdd;
	let equalOrDifferent;

	if (divRemain === 0) {
		evenOrOdd = "even"
	} else {
		evenOrOdd = "odd"
	}

	if (firstNumber === secondNumber) {
		equalOrDifferent = "the same"
	} else {
		equalOrDifferent = "different"
	}

	let results =	`The sum of both numbers is: ${sum}
					The subtraction of both numbers is: ${sub}
					The multiplication of both numbers is: ${multiply}
					The division of both numbers is: ${divide}
					The remainder of the division is: ${divRemain}
					
					The result of the sum is an ${evenOrOdd} number.
					The numbers you entered are ${equalOrDifferent}.`

	return results

}

alert(checkNumbers(firstNumber, secondNumber))


 