// Question 2: Promises

const DELAY_MS = 500;

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const success = { message: 'delayed success!' };
            resolve(success);
        }, DELAY_MS);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const failure = { error: 'delayed exception!' };
            reject(failure);
        }, DELAY_MS);
    });
};

resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
