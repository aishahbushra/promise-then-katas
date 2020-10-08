/* 

DO NOT change the names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

*/

// 1 Create a function that returns a resolving promise
// Example:
// returnPromise() resolves

const returnPromise = () => {
    const promise = new Promise((resolve, reject) => {
        resolve();
    })

    return promise;
 };

// 2 Create a function that returns a promise which returns 10 if it resolves succesfully
// Example:
// returnTen() resolves to 10

const returnTen = () => { 
    return new Promise((resolve, reject) => {
        resolve(10);
    })
};

// 3 Create a function that returns a promise which returns "An error occurred" if it rejects
// Example:
// anError() rejects to "An error occurred"

const anError = () => { 
    const promise = new Promise((resolve, reject) => {
        reject("An error occurred");
    })
    return promise;
};


// 4 Create a function that returns a promise which resolves to "happy" if the parameter is greater than 
// or equal to 1 and rejects to "sad" if the value is less than 1
// Example:
// happySad(1) resolves to "happy"
// happySad(0) rejects to "sad"

const happySad = (x) => { 
    return new Promise((resolve, reject) => {
        if (x >= 1) {
        resolve('happy')
        } else {
        reject('sad')
        }
    })
};

// 5 Create a function that returns a promise which resolves to a function that returns "My name is <input name>" 
// Example:
// myNameIs() resolves to a function that takes one argument, name, and returns "My name is name" Eg name => `Me name is ${name}`


const myNameIs = () => { 
    const promise = new Promise((resolve, reject) => {
        resolve((name) => {
            return `My name is ${name}` 
        })
    })
    return promise;
};

 console.log(myNameIs('Romy'));

module.exports = {
    returnPromise,
    returnTen,
    anError,
    happySad,
    myNameIs
}