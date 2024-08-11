/**
 Problem 4: Count the Number of Substrings with a Given Pattern

Write a function that takes a string and a pattern as inputs, and returns the number of substrings in the string that match the pattern.

Example: Input: "abcabcabc", pattern: "abc" Output: 3 
 * 
 */

const findNumberOfSubstrings = (str) =>{
      const substringsCount = str.split('abc').length
      console.log(substringsCount, "HII")
}
findNumberOfSubstrings("abcabcabcabc")

// Problem 5: Find the max number from an array

const findMax = (arr)=>{
   const maxNum = Math.max(...arr)
   console.log("Max num:", maxNum)
}

findMax([1, 2, 3, 4]);




// Problem 6: Remove Duplicates from an Array
// Write a function that takes an array of numbers and returns a new array with duplicates removed.


const removeDuplicates = (arr)=>{
    // Solution one
    let arrWithNoDuplicates = [...new Set(arr)]
    console.log(arrWithNoDuplicates)

    // Solution two 
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(arr[i]);
        }
    }
    console.log(result)
    
}

removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])