const promiseChainng = () => {
    new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    })
        .then( (result) => {
            alert(result);
            return result + 1;
        })
        .then( (result) => {
            alert(result);
            return result + 1;
        })
        .then( (result) => {
            alert(result);
            return result + 1;
        })
};
