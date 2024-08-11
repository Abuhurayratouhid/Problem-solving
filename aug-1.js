// Problem 1: Reverse a String
// Write a function that takes a string as input and returns the string reversed.


const myStr = "Abu";

const func1 = (text)=>{
    return text.split('').reverse().join('')
}


func1(myStr)

// Problem 2: FizzBuzz
// Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


fizzBuzz();

// Problem 3: Sum of Array Elements
// Write a function that takes an array of numbers and returns the sum of the elements.

const array10 = [1, 2, 3, 4];

const sumOfArrayNumbers = (array10)=>{

    // Solution One
    const result = array10.reduce((total, index)=> total + index, 10 )
    console.log(result)

    // Solution two
    let sum = 0;
    for(let i = 0; i < array10.length; i ++){
        sum += array10[i]
    }
    console.log(sum)

    // Solution Three
    let result2 = 0;
    array10.forEach((elem)=>{ result2 += elem;});
    console.log(result2)
}

sumOfArrayNumbers(array10)