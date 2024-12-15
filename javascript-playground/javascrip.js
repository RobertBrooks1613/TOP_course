// const max = "57"
// const actual = max - "13"
// const percentage = +actual / +max

// console.log()

function add7(num) {
    return 7 + num;
}

function multiply(num1, num2) {
    return num1 * num2
}

function capitalize(str) {
    try {
        if (typeof str !== 'string' || str.length === 0) {
            throw new TypeError('Input must be a string and not empty')
        }
        return str.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    } catch (error) {
        console.error("an error has been thrown. ", error.message);
    }
}