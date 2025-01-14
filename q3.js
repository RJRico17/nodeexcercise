// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    for (let element in array)
    {
        if (array.includes(element))
        {
            array.splice(element);
        }
    }
    console.log(array);
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console

console.log("1: " + testArray3);
removeDuplicates("after remove:" + testArray3);
console.log("2: " + testArray3);