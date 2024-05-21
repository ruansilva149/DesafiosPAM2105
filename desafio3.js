const array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i);

    if (array[i - 1] % 5 === 0 && array[i - 1] % 3 === 0) {
        console.log('buzzfizz');

    } else if (array[i - 1] % 5 === 0) {
        console.log('buzz');

    } else if (array[i - 1] % 3 === 0) {
        console.log('fizz');
        
    } else {
        console.log(array[i - 1]);
    }
}
