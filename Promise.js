const cart = ["shoes", "pants", "kurtas"];
console.log(cart)

function createOrder() {
  console.log('check')
}
/*createOrder(cart, function () { //inversion of control
  proceedToPayment(orderId); //async
}); // async
*/
// Inversion of control
// Means that this call back function will be called once order is created but what if it never calls the callback function so we can't blindly trust it
//Passing call back function like this is not good
// We can handle this using promises

const promise = createOrder(cart) // this will return a promise
// promise is nothing but an empty object with data value in it {data: [will hold whatver this create order api will return to us]}

//{data : undefined} it will be undefined at start but will be filled once api call is returned and data will be filled with api response data

promise.then(function () { // we will use this funtion that is available in promise object
  proceedToPayment(orderId);  //here we have control as it is attached to promise .then function  , 
  // it will wait till promise object is filled with data and then it will automatically call the callbackfunction back
  //it will call 100% and only once
})

const GITHUB_API = "https://jsonplaceholder.typicode.com/posts";
const user = fetch(GITHUB_API); // api given by browser to fetch api data by design it returns a promise
//Result =[[PromiseResult]] : undefined result of promise at initital
//state == [[PromiseState]] inititallly it is in pending state , fulfilled /Rejected only three states
// after that it changes to fulfilled state

console.log(user)
user.then(function (data) {
  console.log(data)
})


//What is a promise
// Can be stated as a placeholder untill it is filled with a value
//  a container for a future value
// A Promise is an object represnting the eventual completion or failure of an asynchronous operation 

// Promise chaining -> attaching .then with another .then to chain a no of promises one after another
// callbck hell example
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrdersummary(paymentInfo, function () {
//       updateWalletBalance();
//     })
//   })
// })

//  To resolve above call back hell we use promise chaining

// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId) // make sure to return it
//   })
//   .then(function (paymentInfo) {
//     return showOrdersummary(paymentInfo)
//   })
//   .then(function (paymentInfo) {
//     return updatedWalletBalance(paymentInfo)
//   })

// or we can write it in arrow function as well
// createOrder(cart)
//   .then( (orderId) =>proceedToPayment(orderId))
//   .then( (paymentInfo) => showOrdersummary(paymentInfo))
//   .then( (paymentInfo) => updatedWalletBalance(paymentInfo))

const posts = "https://jsonplaceholder.typicode.com/posts"
const comments = "https://jsonplaceholder.typicode.com/comments"
const albums = "https://jsonplaceholder.typicode.com/albums"

createPost(posts)
  .then(function (orderId) {
    console.log(orderId)
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId)
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo)
  })
  .catch(function () {
    console.log(err.message)
  })

function createPost() {
  const pr = new Promise(function (resolve, reject) {//Promise constructor
    //producer part
    if (!validateCart) {
      const err = new Error('Cart is not valid')
      reject(err)
    }
    //logic for create order
    const orderId = "12344"
    if (orderId) {
      setTimeout(() => { resolve(orderId), console.log(promise) }, 5000)

    }
  })
  return pr;
}
function proceedToPayment(orderId) {
  //
  return new Promise((resolve, reject) => {
    resolve('Payment success')
  })
}
function validateCart() {
  return true
}

