// Viktor Grygoriev - 101472499

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};

resolvedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });

rejectedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err.message);
    });
