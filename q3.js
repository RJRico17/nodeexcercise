// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++)
    {
        lastElement = array[array.length - 1];
        {
            if (array[i] == lastElement)
            {
                array.pop();
            }
        }
    }
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console

removeDuplicates("after remove:" + testArray3);