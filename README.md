 js-for-react-native-11317514

Student ID
11317514



Task 1 & 2: Process Array &  Format Array Strings
Created `arrayManipulation.js`.
The function initializes an empty array processedArray to store results and uses the forEach method to iterate over each number in the array. If the number is even, it squares and pushes it to processedArray, and if odd, it triples and pushes it to processedArray. The function returns the processed array containing the processed numbers.The formatArrayStrings function verifies whether inputs are arrays and have the same length. It creates an empty array formattedStrings and iterates through it using a for loop. It adjusts each text according to the matching number, capitalizing or converting it to lowercase if the number is odd. The updated string is subsequently placed into formattedStrings. The following is a usage example and result;

const numbers = [1, 2, 3, 4, 5];
const strings = ["Hello", "World", "JavaScript", "React", "Native"];

const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "REACT", "native"]


Task 3: Create User Profiles
The createUserProfiles method validates if the inputs are arrays with the same length. It starts with an empty array, iterates over it with a for loop, and generates an object with the properties id, originalName, and modifiedName. The item is subsequently moved to userProfiles, which contains user profile objects.
Example usage & Results
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const modifiedNames = formatArrayStrings(names, processArray([1, 2, 3, 4, 5]));
console.log(createUserProfiles(names, modifiedNames));
// Output: 
// [
//     { id: 1, originalName: "Alice", modifiedName: "alice" },
//     { id: 2, originalName: "Bob", modifiedName: "BOB" },
//     { id: 3, originalName: "Charlie", modifiedName: "charlie" },
//     { id: 4, originalName: "David", modifiedName: "DAVID" },
//     { id: 5, originalName: "Eve", modifiedName: "eve" }
// ]


Task 4: README File
A brief describtion was added on how the two task works in the `README.md` file and student ID.
