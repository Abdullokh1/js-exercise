// PROBLEM 206 


// let count = 0;

// function isPrimeNumber(n){
//   for(let i = 2; i <= n; i++){
//     let isPrime = true;
//     for(let j = 2; j < i; j++){
//       if(i % j == 0){
//         isPrime = false
//       }
//     }
//     if(isPrime){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(isPrimeNumber(32));



// PROBLEM 207


// let num;

// function evaluate(num){
//   return eval(num)
// }
// console.log(evaluate('5 + 7 - 2'));


// PROBLEM 208


// function getCharacterCount(n){
//   let res = [...n];
//   console.log(res.length);
// }
// getCharacterCount('String');



// PROBLEM 209



// function parseInt(string){
//   if(string.match(/['0-9']/) && !string.includes('-')){
//     return string.length
//   }

//   if(string.match(/['0-9']/) && string.includes('-')){
//     return '-'+ string.length - 2
//   }
//   if(!string.match(/['0-9']/)) {
//     return null
//   }
// }

// console.log(parseInt("Bu manfiy son - 22 -"));



// PROBLEM 215


// let arr = [];
// function sort(...arr){
//   return arr.sort((a,b) => a - b) 
// }
// console.log(sort(3,22,29,18,2,31));


// PROBLEM 216


// let arr = [];
// function min(...arr){
//   let first = arr[0];
//   for(let i = 0; i < arr.length; i++){
//     if(first > arr[i]){
//       first = arr[i]
//     }
//   }
//   return first
// }

// console.log(min(23, -30,5,2,-4,1)); 


// PROBLEM 217 


// function showMessage(num){
//   num % 2 == 0 ? console.log('Juft') : console.log('Toq');
// }
// function oddOrEven(num){
//   showMessage(num)
// }

// oddOrEven(3)


// PROBLEM 218


// let arr = [];

// function flatArray(...arr){
//   return arr.flat()
// }
// console.log(flatArray(1,2,4,5,[6,7],8,9,[19]));


// PROBLEM 219


// const recursion =  function(n){
//   if(n == 1) return 1
//   return n * recursion(n - 1)
// }

// console.log(recursion(5));


