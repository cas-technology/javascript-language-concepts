const threeWebstorage = function () {
    const value = $('#webstorage-example').val();
    localStorage.setItem('storage-example', value + Date.now());
};
