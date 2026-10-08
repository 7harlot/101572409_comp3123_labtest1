// Question 1: ES6 Features


const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        
        if (!Array.isArray(mixedArray)) {
            reject(new Error('lowerCaseWords expects an array'));
            return;
        }

        const lowerCasedWords = mixedArray
            .filter((item) => typeof item === 'string')
            .map((word) => word.toLowerCase());

        resolve(lowerCasedWords);
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message));
