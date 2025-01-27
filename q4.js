/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    let match = 0;
    let change = 1;

   for (let i=0; i<textInput.length; i++)
   {
        if (textInput.charAt(i) == textInput.charAt(textInput.length-change))
        {
            match++;
            //console.log("match: " + textInput.charAt(i) + " = " + textInput.charAt(textInput.length-change))
            change++;
        }
        else
        {
            console.log(false);
            break;
        }

        if (match == textInput.length)
        {
            console.log(true);
        }
   }
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console

checkPalindrome(testString);
checkPalindrome(testString2);