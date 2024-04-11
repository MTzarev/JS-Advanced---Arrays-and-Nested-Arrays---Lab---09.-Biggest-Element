function biggestElement(array) {
    newArr = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        for (let j = 0; j < el.length; j++) {
            let el1 = el[j];
            newArr.push(el1);
        }
    }

    let sorted = newArr.sort((a, b) => a - b).reverse();
    return (sorted[0]);
}
//console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));