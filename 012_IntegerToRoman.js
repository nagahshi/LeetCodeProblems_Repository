/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (typeof num !== 'number')
        return false;
    var digits      = String(+num).split(""), 
        romanKeys   = [ "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                        "","I","II","III","IV","V","VI","VII","VIII","IX"],
        romanNumber = "",
        x = 3;
    while (x--)
        romanNumber = (romanKeys[+digits.pop() + (x * 10)] || "") + romanNumber;
    return Array(+digits.join("") + 1).join("M") + romanNumber;
    
};