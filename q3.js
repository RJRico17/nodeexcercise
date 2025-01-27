// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) 
{
    let newArray = [];
    for (let i = 0; i < array.length; i++) 
    {
        if (array.includes(i))
        {
            newArray.push(i);
        }
    }
    console.log(newArray);
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console

removeDuplicates("after remove:" + testArray3);