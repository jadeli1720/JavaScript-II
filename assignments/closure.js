// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const firstName = 'Jade';

function hello() {
  const lastName = "Lopez";
  console.log(`Hello and good morning ${firstName} ${lastName}!`);
}
 console.log(hello()); 

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function() {
    // count = count + 1; > this is the same as bellow
    return ++count;
  }
};

const newCounter = counter();
console.log(newCounter());// 1
console.log(newCounter());// 1
console.log(newCounter());// 1
console.log(newCounter());// 1
console.log(newCounter());// 1
console.log(newCounter());// 1

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it."return ++count"
// `decrement` should decrement the counter variable and return it. "return --count"
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count)
  }
};

const newCounterFactory = counterFactory();
newCounterFactory.increment();// 1
newCounterFactory.increment();// 2
newCounterFactory.increment();// 3
newCounterFactory.increment();// 4
newCounterFactory.increment();// 5
newCounterFactory.increment();// 6
newCounterFactory.increment();// 7
newCounterFactory.increment();// 8
newCounterFactory.increment();// 9
newCounterFactory.increment();// 10
newCounterFactory.increment();// 11
newCounterFactory.decrement();// 10
newCounterFactory.decrement();// 9
// The above newCounterFactory variable has ran, but we did not print our the results until the last one below
console.log(newCounterFactory.increment());// 10

