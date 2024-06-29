// Function to process the array of numbers
function processArray(numbers) {
    // Check if the input is an array
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array");
    }
    return numbers.map(num => {
        if (typeof num !== 'number') {
            throw new Error("Array must contain only numbers");
        }
        return num % 2 === 0 ? num * num : num * 3;
    });
}

// Function to format the array of strings with the processed array of numbers
function formatArrayStrings(strings, numbers) {
    // Check if both arrays have the same length
    if (!Array.isArray(strings) || !Array.isArray(numbers)) {
        throw new Error('Both inputs must be arrays');
    }
    if (strings.length !== numbers.length) {
        throw new Error('Both arrays must have the same length');
    }

    return strings.map((str, index) => {
        if (typeof str !== 'string') {
            throw new Error('Array must contain only strings');
        }
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}
