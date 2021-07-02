const replacer = require("./replacer");
/**
 * The GetRgb class
 */
    /**
     * Hex 
     * @param {int} Red 
     * @param {int} Green 
     * @param {int} Blue 
     * @param {int} Alpha 
     * @param {boolean} Json 
     */
module.exports = (red, green, blue, alpha, json) => {
    if(!red || !green || !blue) throw new Error(replacer("&3[Colors]&r &cNo RGB provided!")+ "\x1b[0m");
    const isPercent = (red + (alpha || '')).toString().includes('%');

	if (typeof red === 'string') {
		[red, green, blue, alpha] = red.match(/(0?\.?\d{1,3})%?\b/g).map(Number);
	} else if (alpha !== undefined) {
		alpha = parseFloat(alpha);
	}

	if (typeof red !== 'number' ||
		typeof green !== 'number' ||
		typeof blue !== 'number' ||
		red > 255 ||
		green > 255 ||
		blue > 255
	) {
		throw new TypeError('Expected three numbers below 256');
	}

	if (typeof alpha === 'number') {
		if (!isPercent && alpha >= 0 && alpha <= 1) {
			alpha = Math.round(255 * alpha);
		} else if (isPercent && alpha >= 0 && alpha <= 100) {
			alpha = Math.round(255 * alpha / 100);
		} else {
			throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
		}

		alpha = (alpha | 1 << 8).toString(16).slice(1);
	} else {
		alpha = '';
	}
    if(json){
        return {hex: ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1) + alpha}
    }
	return ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1) + alpha;
}