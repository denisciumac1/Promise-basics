const API_URL = "http://ip-api.com/json"

new Promise(function (resolve, reject) {
    console.log(6, "Waiting")
    //////////////////////
    //asynchronuous

    var xhr = new XMLHttpRequest
    xhr.open("GET", API_URL )
    xhr.send()
    xhr.onload = function(){
        resolve(xhr.responseText)
    }

    xhr.onerror = function(){
        reject(xhr.responseText)
    }
    //////////////////////
}) 
  .then(function (message) {
      // logic related to SUCCESS
    console.log(6, "Code resolved!", message)
})

.catch(function (message) {
    //logic related to ERRORS
    console.log(6, "Code rejected!", message)
})