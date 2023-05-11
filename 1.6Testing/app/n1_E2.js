const printMessage = (param, callback) => {
    if (typeof param === 'string') {
        callback('The parameter received is a string');
    } else {
        callback('The parameter received is not a string');
    }
};


module.exports = { printMessage }