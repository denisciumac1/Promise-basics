var p = new Promise(function () {}) // panding forever
console.log(1, p)


var p = new Promise(function (resolve) {
    resolve()
}) // immediately resolved
console.log(2, p)

// var p = new Promise(function (resolve, reject) {
//     reject()
// }) //  immediately rejected
// console.log(3, p)
// ///////////////////////////////////////////

//Promise(something) and then (do this)
// var p = new Promise(function (resolve) {
//     console.log(4, "Resolving promise")
//     resolve()
// }) // immediately resolved
// p.then(function () {
//     console.log(5, "Code after Promise")
// })

// 5 delay resolved
//  new Promise(function (resolve) {
//     console.log(4, "Waiting")
//     setTimeout(function(){resolve()}, 1000)
// }) 
//   .then(function () {
//     console.log(5, "Code after Promise")
// })

// 
// new Promise(function (resolve) {
//     console.log(4, "Waiting")
//     setTimeout(function(){resolve("done!")}, 1000)
// }) 
//   .then(function (message) {
//     console.log(5, "Code after Promise", message)
// })
//
new Promise(function (resolve, reject) {
    console.log(6, "Waiting")
    setTimeout(function(){
        Math.random()> 0.5 ? reject("oops!") : resolve("done!")
  
    }, 1000)
}) 
  .then(function (message) {
      // logic related to SUCCESS
    console.log(6, "Code resolved!", message)
})

.catch(function (message) {
    //logic related to ERRORS
    console.log(6, "Code rejected!", message)
})