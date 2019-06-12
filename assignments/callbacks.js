// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array. 
//  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum' , 'yo-yo'];

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

  // Anonymous Function Solution:
// function firstItem(arr, cb) {
//   cb(arr[0]);
// }
// firstItem(items, function(first) {
//   console.log(first);
// });

*/
// The below function will be used in all the problems bellow to show the results of the functions I create
function showResult(result) {
  console.log('result:', result);
}

// 1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

// Ivocation # 1:
getLength(items, showResult); //Should be 5 

// Invocation # 2:
// getLength( items, function(length) {
//   console.log(length)
// });


// 2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[3]);
}

// Ivocation # 1:
last(items, showResult);//Should be gum

// // Invocation # 2
// last(items, function(last) {
//   console.log(last);
// });



// 3
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
// Invocation # 1
sumNums(10, 10, showResult);

// // Invocation # 2
// sumNums(10, 15, function(total) {
//   console.log(total);
// });


// 4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return  cb(x * y);
}
// Invocation # 1
multiplyNums(30, 10, showResult);

// Invocation # 2:
// multiplyNums(10, 15, function(total) {
//   console.log(total);
// });


// 5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false. arr.includes
 return cb(list.includes(item));
}

contains('Gum', items, showResult);
contains('turd', items, showResult);

// Second possible solution

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === item) {
//       return cb(true);
//     }
//   }
//   return cb(false);
// }

// contains('Bats', items, function(flag) {
//   console.log(flag); // should be false
// });

// contains('Notebook', items, function(flag) {
//   console.log(flag); // should be true
// });


/* STRETCH PROBLEM */
// Went to this site for help: https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let unique = array.filter(function (items, pos) {
    //validates whether the first occurrence of current item in array
   // equals the current position of the item (only return those items) 
    return array.indexOf(items) == pos;
  })
  //wraps the result and passes it to cb function 
  cb(unique)
}


// ***** Solution 2:
// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   let unique = {};
//     array.forEach(function (items) {
//       if (!unique[items]) {
//         unique[items] = true;
//       }
//     })
//   //wraps the result and passes it to cb function 
//   cb(unique)
// } //works but prints out: result: { Pencil: true, Notebook: true, 'yo-yo': true, Gum: true } a little messy

removeDuplicates(items, showResult);

// **** Solution 3:
function removeDuplicates(arr, cb) {
  const seen = {};// a map of the keys. This will hold the values as a bool if 'seen' in the given array.
  for (let i = 0; i < arr.length; i++) { // loop over array list and assign the object a 'key' of the given item w/ a value of 'true'
    seen[arr[i]] = true; // this will set the key/value pair of each item found in the array to `true`. 
    // It will not duplicate the item because Objects can only have one key of of each 'like' so. `yo-yo` will only be added 1 time etc. 
  }
  cb(Object.keys(seen));// Object.keys generates a list as an array of each key in the object passed to it.
  // Could do the same of each value with `Object.values` :) 
}

removeDuplicates(items, function(dupeFreeArray) { 
  console.log(dupeFreeArray);
});