// const str = 'akjhisd9fndsfj11dssd22adsasd11as9dasd22adasd11asdasd22dsad11';

// // Function to count occurrences of a specific substring directly in the code
// function countOccurrencesInString(str) {
//     let count11 = 0;
//     let count22 = 0;
//     let strLength = str.length;
    
//     for (let i = 0; i <= strLength - 2; i++) {
//         // Check for '11'
//         if (str[i] === '1' && str[i + 1] === '1') {
//             count11++;
//             i++; // Move index forward by 2 to avoid overlapping occurrences
//         }
//         // Check for '22'
//         else if (str[i] === '2' && str[i + 1] === '2') {
//             count22++;
//             i++; // Move index forward by 2 to avoid overlapping occurrences
//         }
//     }
    
//     return { count11, count22 };
// }

// const { count11, count22 } = countOccurrencesInString(str);

// console.log(`'11' occurs ${count11} times`);
// console.log(`'22' occurs ${count22} times`);


const str = 'akjhisd9fndsfj11dssd22adsasd11as9dasd22adasd11asdasd22dsad11';

function countAllIntegers(str) {
    let counts = {};
    let num = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        // Check if character is a digit
        if (char >= '0' && char <= '9') {
            num += char; // Append digit to current number
        } else if (num) {
            // If non-digit and num is not empty
            counts[num] = (counts[num] || 0) + 1;
            num = ''; // Reset current number
        }
    }
    
    // Check if there's a number left at the end of the string
    if (num) {
        counts[num] = (counts[num] || 0) + 1;
    }
    
    return counts;
}

const counts = countAllIntegers(str);

for (const [key, value] of Object.entries(counts)) {
    console.log(`${key} occurs ${value} times`);
}
