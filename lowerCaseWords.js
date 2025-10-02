// Viktor Grygoriev - 101472499

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Error: Input is not an array");
        }

      
        const filtered = mixedArray.filter(item => typeof item === "string")
                                   .map(str => str.toLowerCase());

        if (filtered.length > 0) {
            resolve(filtered);
        } else {
            reject("No found");
        }
    });
}


const mixedArray = ["PIZZA", 10, true, "JavaScript", "HELLO", 34];
lowerCaseWords(mixedArray)
    .then(result => console.log("Result:", result))
    .catch(error => console.error(error));

module.exports = lowerCaseWords;
