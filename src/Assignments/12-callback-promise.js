const promiseCallbacks = () => {
    const promise = () => new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    });

    const resolveFunc = (val) => {
        alert(val);
    };

    promise().then(resolveFunc);
};
