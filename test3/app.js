// ТЕСТ 3

let arr = [2, 4, 5, 7, 9, 4, 1, 16]
let getEven = arr.filter(function(elem) {
    if (elem % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(getEven);