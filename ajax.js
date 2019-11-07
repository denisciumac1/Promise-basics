const API_URL = "http://ip-api.com/json"


function ajaxGET( url ){
return new Promise(function (resolve, reject) {
    console.log(6, "Waiting")
    //////////////////////
    //asynchronuous

    var xhr = new XMLHttpRequest
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function(){
        resolve(xhr.responseText)
    }

    xhr.onerror = function(){
        reject(xhr.responseText)
    }
    //////////////////////
 }) 
}



// function primeste o adresa si return o promisiune care asteapta datele de pe aceasta adresa


ajaxGET( API_URL )
  .then(function (message) {
      // logic related to SUCCESS
    console.log(6, "Code resolved!", message)
})

.catch(function (message) {
    //logic related to ERRORS
    console.log(6, "Code rejected!", message)
})