/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reversedNumber = parseFloat(
                            x.toString()
                            .split('')
                            .reverse()
                            .join('')
                        )*Math.sign(x)
    return reversedNumber
};