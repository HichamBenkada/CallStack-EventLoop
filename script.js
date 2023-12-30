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

const hOne = document.createElement("h1");
function isPrime(n, i = 2){
    if (n == i){
        return true;
    }
    else if(n % i ==0) {
        return false;
    }
    return isPrime(n, i++)
}
document.body.appendChild(hOne)
function addPrimeList(n){
    hOne.textContent = `list of primes between 1 and ${n}:`
    while(n>1){
        if(isPrime(n)){ 
        hOne.textContent +=`${n} ,`
        }
        n--;
    }
    
    
    setTimeout(()=>{alert('Calculation is finished')},0)
}
