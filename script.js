// // part1: finding the max range of my Call Stack:
// let counter = 0;
// //recursive function will cause stack overflow without a base case
// function increment(num){
//     counter = num;
//     return increment(++num);
// }
// // catching the stack overflow error
// try {
//     increment(counter);
// } catch (err){
//     console.log(`max: ${counter}`,err.stack);// I got 12555 range
// }

// //part2: Trampolining eleminate stack overflow

// //recursive to flatten an array of nasted arrays

// function flatten(arr){
//     if(arr.length === arr.flat().length) return arr;
//     arr = arr.flat();
//     return () => flatten(arr);
// }

// function trampoline(fn,...arr){
//     let result = fn(...arr);
//     while (typeof result === "function"){
//         result = result();
//     }
//     return result;
// }

// console.log(trampoline(flatten([21,3,[21,9,[2,4,7,9,[2,9,0]],[2,3]],21,3,[21,9,[2,4,7,9,[2,9,0]],[2,3]],21,3,[21,9,[2,4,7,9,[2,9,0]],[2,3,21,3,[21,9,[2,4,7,9,[2,9,0]],[2,3]]]]]))); 

//part3: Deferred Execution

// result holder element
document.body.appendChild(document.createElement("h1")).setAttribute("id","hOne")
const hOne = document.getElementById("hOne")

function isPrime(n,i=2){
    if (n === i) return true;
    if (n % i === 0) return false;
    return isPrime(n, ++i);
}

//add prime numbers to the list
let prime =2;
function addPrimeList(num){
    while(prime <= num){
        if(isPrime(prime)) hOne.textContent += `${prime} `;
        prime++;
    }

   return setTimeout(() =>{alert("Calculation is finished")},0);
}

//requesting a number from the user or 'one' 
let userInput= prompt("I can find all primes bellow a number, Enter a number") || 1;

if(!isNaN(Number(userInput)) && userInput > 1){
    hOne.textContent = `you have entered '${userInput}', and the list of all primes between 1 and ${userInput} ${(userInput==2)? 'is':'are'}: `;
        addPrimeList(userInput);
}
else{
    hOne.textContent = `you have entered '${userInput}', Bruh! Are serious ☹!?`;}
    let aEl = document.createElement("a")
    aEl.setAttribute("href","./index.html")
    document.body.appendChild(aEl).textContent="Try again!";
