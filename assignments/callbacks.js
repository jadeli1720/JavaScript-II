// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array. 
//  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.

    // Breaking it down
    // Keywords: callback refers to cb
    // given array is arr
    // passes the first item: need to get the first item by passing(return) using the callback function
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back

  function firstItem(arr, cb) {
    return cb(arr[0]); //calling the first-item in the array an passing it to through the cb functions
  }

  // Function invocation :second piece of this problem. Start with the invocation 
  check repelit: https://repl.it/@JadeLopez/Web21-Callbacks

  firstItem(items, function(first) {
    console.log(first)
  });

*/
function showResult(result) {
  console.log('result:', result)
}

// 1
function getLength(arr, cb) {
  return cb(arr.length);
}

// Ivocation # 1:
getLength(items, showResult);  

// Invocation # 2:
// getLength( items, function(length) {
//   console.log(length)
// });

// 2
function last(arr, cb) {
  return cb(arr[3]);
}

last(items, function(last) {
  console.log(last)
});

// 3
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(10, 10, showResult);

// 4
function multiplyNums(x, y, cb) {
  return  cb(x * y);
}

sumNums(30, 10, showResult);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false. arr.includes
 return cb(list.includes(item))
}

contains('Gum', items, showResult);
contains('turd', items, showResult);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
