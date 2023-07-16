// //Closure

// // function Welcome(name) {
// //   let greetingInfo = function (message) {
// //     console.log(message + " " + name);
// //   }
// //   return greetingInfo;
// // }
// // let myFunction = Welcome('John');
// // myFunction("Welcome")


// // function createFib() {
// //   const cache = {};
// //   return function fib(n) {
// //     if (n in cache) {
// //       return cache[n];
// //     } else {
// //       let a = 0, b = 1, c;
// //       for (let i = 0; i < n; i++) {
// //         c = a + b;
// //         a = b;
// //         b = c;
// //       }
// //       cache[n] = a;
// //       return a;
// //     }
// //   };
// // }

// // const createFibGen1 = createFib();
// // console.log(createFibGen1(10));


// // function createFib() {
// //   const cache = {};
// //   return function fib(n) {
// //     if (n in cache) {
// //       return cache[n];
// //     } else {
// //       if (n <= 1) {
// //         return n;
// //       } else {
// //         const result = fib(n - 1) + fib(n - 2);
// //         cache[n] = result;
// //         return result;
// //       }
// //     }
// //   };
// // }

// // const createFibGen2 = createFib();
// // console.log(createFibGen2(12));


// // const myPromise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     const randomNumber = Math.random();
// //     if (randomNumber < 0.5) {
// //       resolve(randomNumber);
// //     }
// //     else {
// //       reject(new Error('Error'))
// //     }
// //   }, 2000)
// // });

// // myPromise
// //   .then((result) => {
// //     console.log('Resolved', result)
// //   }).catch((error) => {
// //     console.log('error', error)
// //   })


// //Promise chaining
// // function fetchUserData() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const userData = {
// //         id: 1,
// //         name: 'Animesh',
// //         email: 'animesh@example.com'
// //       };
// //       resolve(userData);
// //     }, 2000)
// //   })
// // }

// // function fetchUserPosts(userId) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const userPosts = [
// //         { id: 1, title: 'animesh', body: 'This is my first post' },
// //         { id: 2, title: 'anish', body: 'This is my second post' },
// //         { id: 3, title: 'anime', body: 'This is my third post' },
// //       ]
// //       resolve(userPosts);
// //     }, 1500)
// //   })
// // }

// // function fetchPostComments(postId) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const postComments = [
// //         { id: 1, postId: 1, text: 'Comment1' },
// //         { id: 2, postId: 2, text: 'Comment2' },
// //         { id: 3, postId: 3, text: 'Comment3' },
// //         { id: 4, postId: 4, text: 'Comment4' },
// //       ]
// //       resolve(postComments)
// //     }, 1000);
// //   })
// // }

// // fetchUserData()
// //   .then((userData) => {
// //     console.log('User data', userData);
// //     return fetchUserPosts(userData.id)
// //   })
// //   .then((userPosts) => {
// //     console.log('UserPosts', userPosts);
// //     const postId = userPosts[0].id
// //     return fetchPostComments(postId)
// //   })
// //   .then((postComments) => {
// //     console.log('Post comments', postComments);
// //   })
// //   .catch((error) => {
// //     console.error('Error:', error)
// //   })

// // Promise methods
// // 1. Finally
// // function fetchData() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const data = { id: 1, name: "animesh" }
// //       resolve(data);
// //     }, 2000)
// //   })
// // }
// // fetchData
// //   .then((data) => {
// //     console.log('data', data)
// //   })
// //   .catch((error) => {
// //     console.error(error)
// //   })
// //   .finally(() => {
// //     console.log('Finally executed')
// //   })


// //Promise.all , race and allsettled
// // const promise1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve('Promise1 resolved')
// //   }, 1000)
// // })
// // const promise2 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve('Promise2 resolved')
// //   }, 1200)
// // })
// // const promise3 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve('Promise3 resolved')
// //   }, 1500)
// // })
// // const promise4 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     reject('Promise4 rejected')
// //   }, 500)
// // })

// // Promise.all([promise1, promise2, promise3])
// //   .then((results) => {
// //     console.log('All promises fulfilled')
// //     console.log('results:', results)
// //   })
// //   .catch((error) => {
// //     console.error(error)
// //   })

// // Promise.race([promise1, promise2, promise4])
// //   .then((results) => {
// //     console.log('All promises raced')
// //     console.log('results:', results)
// //   })
// //   .catch((error) => {
// //     console.log('The first promise to get rejected')
// //     console.error(error)
// //   })
// // Promise.allSettled([promise1, promise2, promise4])
// //   .then((results) => {
// //     console.log('All promises settled')
// //     console.log('results:', results)
// //   })
// //   .catch((error) => {
// //     console.error(error)
// //   })


// //fetch
// // fetch('https://jsonplaceholder.typicode.com/posts')
// //   .then((response) => response.json())
// //   .then((data) => {
// //     if (data.length > 10) {
// //       return data.slice(0, 10)
// //     }
// //     return data

// //   })
// //   .then((modifiedData) => {
// //     console.log(modifiedData)
// //   })
// //   .catch((error) => {
// //     console.error('Error', error)
// //   })


// //event loop
// // console.log('Start');

// // // Example 1: setTimeout
// // setTimeout(() => {
// //   console.log('setTimeout 1');
// // }, 0);

// // // Example 2: Promise and microtask queue
// // Promise.resolve().then(() => {
// //   console.log('Promise 1');
// // });

// // // Example 3: Synchronous function
// // function syncFunction() {
// //   console.log('Synchronous function');
// // }

// // syncFunction();

// // console.log('End');


// //call apply and bind

// // function greet(message) {
// //   console.log(message + " " + this.name)
// // }
// // const person = { name: 'john' }
// // const person1 = { name: 'alpha' }
// // const person2 = { name: 'gamma' }

// // greet.call(person, 'hello')
// // greet.apply(person1, ['hello'])

// // const greetFunc = greet.bind(person2)
// // greetFunc('Hello')

// // map filter reduce
// // const numbers = [1, 2, 3, 4, 5, 6]

// // const multipleof2 = numbers.map((num) => num * 2)
// // console.log(multipleof2) //creates a new array by applying provided function to all ele of arr

// // const numberGreater2 = numbers.filter((num) => num > 2)
// // console.log(numberGreater2)

// // const sum = numbers.reduce((acc, num) => acc + num, 0)
// // console.log(sum)


// function moveZerosToEnd(input) {
//   let zeroCount = 0; // Variable to keep track of the number of zeros
//   let index = 0; // Variable to track the current position for non-zero elements in the modified input array

//   // Count zeros and move non-zeros to the front
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] !== 0) {
//       // If the element is not zero
//       input[index++] = input[i]; // Move the non-zero element to the front of the input array
//     } else {
//       // If the element is zero
//       zeroCount++; // Increment the count of zeros
//     }
//   }

//   // Fill the remaining positions with zeros
//   while (zeroCount > 0) {
//     input[index++] = 0; // Append zeros to the end of the modified input array
//     zeroCount--; // Decrement the count of remaining zeros to be added
//   }

//   return input; // Return the modified input array
// }

// // Example usage
// const input = [1, 0, 2, 0, 3, 0, 4, 0, 0];
// const output = moveZerosToEnd(input);
// console.log(output); // [1, 2, 3, 4, 0, 0, 0, 0, 0]

// // function sortArr(arr) {
// //   let zeroCount = 0;
// //   const sortedArr = []
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === 0) {
// //       zeroCount++;
// //     }
// //     else {
// //       sortedArr.push(arr[i])
// //     }
// //   }
// //   for (let j = 0; j < zeroCount; j++) {
// //     sortedArr.push(0)
// //   }
// //   return sortedArr;
// // }
// // function sortArray(arr) {
// //   let left = 0;
// //   let right = arr.length - 1;

// //   while (left < right) {
// //     if (arr[left] === 0 && arr[right] !== 0) {
// //       // Swap the positions of zero and non-zero elements
// //       const temp = arr[left];
// //       arr[left] = arr[right];
// //       arr[right] = temp;
// //       left++;
// //       right--;
// //     } else {
// //       if (arr[left] !== 0) {
// //         left++;
// //       }
// //       if (arr[right] === 0) {
// //         right--;
// //       }
// //     }
// //   }

// //   return arr;
// // }

// // function sortArr(arr) {
// //   let nonZero = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== 0) {
// //       [arr[i], arr[nonZero]] = [arr[nonZero], arr[i]];
// //       nonZero++;
// //     }
// //   }
// //   for (let i = nonZero; i < arr.length; i++) {
// //     arr[i] = 0;
// //   }
// //   return arr;
// // }

// // // Test the function
// // const array = [1, 0, 2, 0, 3, 0, 4];
// // console.log(sortArr(array)); // Output: [1, 2, 3, 4, 0, 0, 0]

// // function generatePermutations(str) {
// //   const permutations = []; // Array to store generated permutations

// //   // Recursive function to generate permutations
// //   function backtrack(current, visited) {
// //     if (current.length === str.length) {
// //       // Base case: If the current permutation is complete, add it to the permutations array
// //       permutations.push(current);
// //       return;
// //     }

// //     for (let i = 0; i < str.length; i++) {
// //       if (visited[i]) continue; // Skip characters that are already visited

// //       visited[i] = true; // Mark the character as visited
// //       // console.log(`Visiting ${str[i]}`);
// //       // console.log(`Current: ${current + str[i]}`);
// //       backtrack(current + str[i], visited); // Recursively generate permutations with the updated current string
// //       visited[i] = false; // Unmark the character to allow it for future permutations
// //       // console.log(`Backtracking: ${current}`);
// //     }
// //   }

// //   const visited = Array(str.length).fill(false); // Array to track visited characters, initially all false
// //   backtrack("", visited); // Start generating permutations with an empty current string

// //   return permutations.sort(); // Sort the permutations array in lexicographically increasing order
// // }

// // // Example usage:
// // const str = "abc";
// // const result = generatePermutations(str);
// // console.log(result);

// // Q1
// // You are given a string 'STR' consisting of lowercase English letters. Your task is to return all permutations of the given string in lexicographically increasing order.
// // String A is lexicographically less than string B, if either A is a prefix of B (and A ≠ B), or there exists such i (1 <= i <= min(|A|, |B|)), that A[i] < B[i], and for any j (1 <= j < i) A[i] = B[i]. Here |A| denotes the length of the string A.

// // function generatePermutations(str) {
// //   const result = [];

// //   function permute(current, remaining) {
// //     if (remaining.length === 0) {
// //       result.push(current);
// //       return;
// //     }

// //     for (let i = 0; i < remaining.length; i++) {
// //       const next = current + remaining[i];
// //       console.log('next', next)
// //       const remainingChars = remaining.slice(0, i) + remaining.slice(i + 1);
// //       console.log('remainingChars', remainingChars)
// //       permute(next, remainingChars);
// //     }
// //   }

// //   permute('', str);
// //   return result.sort();
// // }

// // // Example usage:
// // const str = 'abc';
// // const result = generatePermutations(str);
// // console.log(result);

// // q2
// // You are given an array 'ARR' of 'N' positive integers. Your task is to find if we can partition the given array into two subsets such that the sum of elements in both subsets is equal.
// // For example, let’s say the given array is [2, 3, 3, 3, 4, 5], then the array can be partitioned as [2, 3, 5], and [3, 3, 4] with equal sum 10.
// // function canPartition(arr) {
// //   const N = arr.length;
// //   let totalSum = 0;

// //   // Calculate total sum
// //   for (let i = 0; i < N; i++) {
// //     totalSum += arr[i];
// //   }

// //   // Check if total sum is odd
// //   if (totalSum % 2 !== 0) {
// //     return false;
// //   }

// //   const targetSum = totalSum / 2;
// //   const dp = new Array(targetSum + 1).fill(false);
// //   console.log(dp)

// //   // Set the initial value for sum 0 as true
// //   dp[0] = true;
// //   console.log(dp)

// //   // Calculate possible sums
// //   for (let i = 0; i < N; i++) {
// //     for (let j = targetSum; j >= arr[i]; j--) {
// //       // Check if current sum (j) can be achieved using the current element (arr[i])
// //       dp[j] = dp[j] || dp[j - arr[i]];
// //     }
// //   }

// //   return dp[targetSum];
// // }

// // // Example usage:
// // const arr = [2, 3, 3, 3, 4, 5];
// // console.log(canPartition(arr)); // Output: true


// // Define a Node class to represent each node in the binary tree
// // class Node {
// //   constructor(value) {
// //     this.value = value;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }

// // Function to find the maximum distance between two nodes in a binary tree
// // function findMaxDistance(root) {
// //   let maxDistance = 0;

// //   // Recursive helper function to calculate the height of a node
// //   function calculateHeight(node) {
// //     if (node === null) {
// //       return 0;
// //     }

// //     const leftHeight = calculateHeight(node.left);
// //     const rightHeight = calculateHeight(node.right);

// //     // Update the max distance if the path through the current node is longer
// //     maxDistance = Math.max(maxDistance, leftHeight + rightHeight);

// //     // Return the height of the current node
// //     return 1 + Math.max(leftHeight, rightHeight);
// //   }

// //   // Start the DFS traversal from the root node
// //   calculateHeight(root);

// //   return maxDistance;
// // }

// // // Example usage:
// // // Create a binary tree
// // const root = new Node(1);
// // root.left = new Node(2);
// // root.right = new Node(3);
// // root.left.left = new Node(4);
// // root.left.right = new Node(5);
// // root.right.left = new Node(6);
// // root.right.right = new Node(7);

// // // Find the maximum distance between two nodes in the binary tree
// // const maxDistance = findMaxDistance(root);
// // console.log('Maximum distance:', maxDistance);


// // function findFrequency(arr) {
// //   const frequencyMap = new Map(); // Create a map to store number-frequency pairs

// //   for (let i = 0; i < arr.length; i++) {
// //     const num = arr[i];

// //     if (frequencyMap.has(num)) {
// //       // If the number is already present in the map, increment its frequency
// //       frequencyMap.set(num, frequencyMap.get(num) + 1);
// //     } else {
// //       // If the number is encountered for the first time, set its frequency to 1
// //       frequencyMap.set(num, 1);
// //     }
// //   }

// //   // Print the frequency of each number
// //   frequencyMap.forEach((frequency, num) => {
// //     console.log(`${num} occurs ${frequency} time(s)`);
// //   });
// // }

// // const sortedArray = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
// // findFrequency(sortedArray);


// // Square root of a give number


// // function squareRoot(num) {
// //   if (num < 0) {
// //     return NaN;
// //   }
// //   if (num == 0 || num == 1) {
// //     return num;
// //   }
// //   let low = 0;
// //   let high = num;
// //   let prec = 1e-7;
// //   while (high - low ? prec) {
// //     let mid = (low + high) / 2;
// //     let square = mid * mid;
// //     if (square == num) {
// //       return mid
// //     } else if (square < num) {
// //       low = mid;
// //     }
// //     else {
// //       high = mid;
// //     }
// //   }
// //   return low;
// //   // let x = num;
// //   // let y = 1;
// //   // while (x > y) {
// //   //   x = (x + y) / 2;
// //   //   y = num / x;
// //   // }
// //   // return x;

// // }
// // const num = 144;
// // const squareR = squareRoot(num);
// // console.log(squareR)

// // function squareRoot(number) {
// //   if (number < 0) {
// //     return NaN;
// //   }

// //   if (number === 0 || number === 1) {
// //     return number;
// //   }

// //   let low = 0;
// //   let high = number;
// //   let precision = 1e-7; // Desired precision

// //   while (high - low > precision) {
// //     let mid = (low + high) / 2;
// //     let square = mid * mid;

// //     if (square === number) {
// //       return mid; // Exact square root found
// //     } else if (square < number) {
// //       low = mid;
// //     } else {
// //       high = mid;
// //     }
// //   }

// //   // Return the approximate square root with desired precision
// //   return low;
// // }

// // const number = 16;
// // const squareR = squareRoot(number);

// // console.log(`The square root of ${number} is: ${squareR}`);


// // function findMiddlePositive(arr) {
// //   // Filter out negative numbers
// //   const positiveArr = arr.filter((num) => num > 0);

// //   // Calculate the length of the new array
// //   const length = positiveArr.length;

// //   // Calculate the index of the middle element
// //   const middleIndex = Math.floor(length / 2);

// //   // Retrieve the element at the middle index
// //   const middleElement = positiveArr[middleIndex];

// //   return middleElement;
// // }

// // const arr = [-2, -1, 0, 1, 2, 3, 4, 5];
// // const middlePositive = findMiddlePositive(arr);

// // console.log(`The middle positive number is: ${middlePositive}`);


// function shortenString(input) {
//   let shortened = input;
//   let prevChar = '';

//   do {
//     prevChar = '';
//     let temp = '';

//     for (let i = 0; i < shortened.length; i++) {
//       if (shortened[i] !== prevChar) {
//         temp += shortened[i];
//         prevChar = shortened[i];
//       }
//     }

//     shortened = temp;
//   } while (shortened.length !== input.length);

//   return shortened;
// }

// // Example usage:
// const inputString = "aabbccddeeffgghhiijj";
// const shortenedString = shortenString(inputString);
// console.log(shortenedString); // Output: "abcdefghij"

function shortenString(input) {
  let shortenedString = input;

  let hasConsecutiveDuplicates = true;
  while (hasConsecutiveDuplicates) {
    hasConsecutiveDuplicates = false;
    let tempString = '';

    for (let i = 0; i < shortenedString.length; i++) {
      if (shortenedString[i] !== shortenedString[i + 1]) {
        tempString += shortenedString[i];
      } else {
        hasConsecutiveDuplicates = true;
        i++; // Skip the next character since it is a duplicate
      }
    }

    shortenedString = tempString;
  }

  return shortenedString;
}

// Example usage
const inputString = "aabbccddeeffgg";
const shortenedString = shortenString(inputString);
console.log(shortenedString); // Output: "abcdefg"

