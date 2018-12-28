const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'chandra sekar',
        //     age: 27
        // });
        reject('somthing went wrong');
    }, 5000);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error :', error);
})