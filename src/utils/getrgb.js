const replacer = require("./replacer");
/**
 * The GetRgb class
 */
    /**
     * Hex 
     * @param {string} hex 
     * @param {boolean} text 
     */
module.exports = (hex, text) => {
    if(!hex) throw new Error(replacer("&3[Colors]&r &cNo Hex provided!")+ "\x1b[0m");
    if (typeof hex !== 'string') throw new Error(replacer("&3[Colors]&r &cHex is not a &qSTRING!")+ "\x1b[0m");

    if (hex.length < 3) throw new Error(replacer("&3[Colors]&r &cHex is not a &qVALID!")+ "\x1b[0m");
	
    if (hex.charAt && hex.charAt(0) === '#') {
        hex = removeHash(hex)
    }
    
    if (hex.length === 3) {
        hex = expand(hex)
    }
    
    var bigint = parseInt(hex, 16)
    var r = (bigint >> 16) & 255
    var g = (bigint >> 8) & 255
    var b = bigint & 255
    if(text) {
        return `R: ${r}, G: ${g}, B: ${b}`
    }
    return {r: r, g: g, b: b};
    
    
    //return [r, g, b]
}
    
function removeHash (hex) {
    
      var arr = hex.split('')
      arr.shift()
      return arr.join('')
}
    
function expand (hex) {
    return hex.split('').reduce(function (accum, value) {return accum.concat([value, value])}, []).join('')
}