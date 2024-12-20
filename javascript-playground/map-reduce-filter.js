// Array of mixed numbers including positive and negative integers
const mixedNumbers = [1,12,4,6,9,-3,15,18,88,2,4,-15,5,9,3,2,0];

// Find the maximum number in the array using reduce
maxNum = mixedNumbers.reduce((max, currentNum) => {
    // If current number is greater than max, it becomes the new max
    if (max < currentNum) return currentNum;
    else return max;
});

console.log("max number = " + maxNum);

// Find the minimum number in the array using reduce
minNum = mixedNumbers.reduce((min, currentNum) => {
    // If current number is less than min, it becomes the new min
    if (currentNum < min) return currentNum;
    else return min;
});

console.log("min number = " + minNum);

// Function to process a comma-separated string of names
function getNames(names) {
    let namesList = []
    try {
        // Split the input string into an array using comma as separator
        namesList = names.split(','); 
        // If there's only one or no name (no commas found), throw an error
        if (namesList.length <= 1) {
            throw new Error("no ',' found.");
        }
    }
    catch (e){ 
        console.log(e); 
        return []; // Return empty array if there's an error
    }

    // Process each name in the array
    namesList = namesList.map(name => {
        let nameReturn = [];
        
        name = name.trim(); // Trim whitespace from the name

        // Process each character in the name
        for (let i = 0; i < name.length; i++) {
            let char = name[i];
            if (i === 0) nameReturn.push(char.toUpperCase()); // Capitalize first letter
            else if (char === ',') char = ''; // Remove any remaining commas
            else nameReturn.push(char.toLowerCase()); // Lowercase other letters
        }
        return nameReturn.join(''); // Join characters back into a string
    });

    return namesList;
}

// Example input string of names
let userInput = "sarah, bobby, theo, laythan, sophia, alexander";

// Process the input string
let getNameList = getNames(userInput)

// Name to be removed from the list
let rmName = 'theo';

// Filter out the name to be removed (case-insensitive)
getNameList = getNameList.filter(name => name.toLowerCase() !== rmName.toLowerCase());
console.log(getNameList)