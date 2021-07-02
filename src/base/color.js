const replacer = require("./replacer");
/**
 * The Color class
 */
class Color {

    /**
     * Creates new Color instance
     * @param {string} text 
     * @param {ColorOptions} options 
     */
	constructor(text = "", options = {}) {

        /**
         * Color options
         * @param {string} text
         * @param {ColorOptions} json
         * @type {ColorOptions}
        */
		this.text = text;
		if(!this.text) throw new Error(replacer("&3[Colors]&r &cNo text provided!")+ "\x1b[0m")
		this.json = options.json;

		if(typeof this.text == "object") {
			this.text2 = "";
			var i;
			for (i = 0; i < this.text.length; i++) {
				this.text2 += text[i] + "\n"
			}
		}

		if(this.text2) {
			this.text = this.text2
		}
        
        this.text = replacer(this.text);
	}


    /**
     * Internal method to getText
     * @returns {json}
	 * @returns {string}
     */
	getText() {
		if(!this.text) return console.log(replacer("&3[Colors]&r &cNo text provided!")+ "\x1b[0m")
		if(this.json) {
			return {text:this.text + "\x1b[0m"}
		}
		return this.text + "\x1b[0m";
	}

};

module.exports = Color;