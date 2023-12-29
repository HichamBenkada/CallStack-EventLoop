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

//part2: Trampolining eleminate stack overflow

//recursive to flatten an array of nasted arrays

function flatten(arr){
    if(arr.length === arr.flat().length) return arr;
    return () => flatten(arr.flat());
}

function trampoline(fn,...arr){
    let result = fn(...arr);
    while (typeof result === "function"){
        result = result();
    }
    return result;
}

console.log(trampoline(flatten(),[21,3,[21,9,[2]]]));
