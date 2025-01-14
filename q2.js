// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    let largeNum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largeNum) {
            largeNum = array[i];
        }
    }
    console.log(largeNum);
}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5

// TODO: display the largest number in the array in the console

findLargest(testArray2);