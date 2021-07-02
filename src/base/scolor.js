const replacer = require("./replacer");
/**
 * The GetRgb class
 */
    /**
     * Hex 
     * @param {string} Text 
     * @param {boolean} Json 
     */

module.exports = (text , json) => {
    if(!text) throw new Error(replacer("&3[Colors]&r &cNo text provided!")+ "\x1b[0m");
    var text2 = "";
    if(typeof text == "object") {
        var i;
        for (i = 0; i < this.text.length; i++) {
            text2 += text[i] + "\n"
        }
    }

    if(text2 !== "") {
        text = text2
    }
    
    text = replacer(text);


    if(json) {
		return {text:text + "\x1b[0m"}
	}
	return text + "\x1b[0m";
}