/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    /*for (let i=0;i < textInput.length/2; i++) { 
        if (textInput.charAt(i)!=textInput.charAt((textInput.length)-i)) {
            console.log("NOT A PALINDROME");
            break;
        }
        else {
            console.log("PALINDROME!");
        }
    }*/
   for (let i=0; i<textInput.length; i++) // i is 0. while i is less than racecar.length (so 7) i++
   {
        if (textInput.charAt(i) == textInput.charAt(textInput.length)) // if (0; r) is NOT EQUAL to (7)
        {
            console.log(textInput + ": PALINDROME");
            console.log(true);
        }
        else
        {
            console.log(textInput + ": NOT-PALINDROME");
            console.log(false);
        }
   }
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console

checkPalindrome(testString);
checkPalindrome(testString2);