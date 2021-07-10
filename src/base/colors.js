
const replacer = require("../utils/replacer");
class colors {
    constructor(){
        this.Colors = ["red","green","blue"]
        this.Codes = {
            red: [255,0,0],
            green: [0,255,0],
            blue: [0,0,255]
        }
    }
    get(color){

        if(this.Colors.includes(color.toLowerCase())){
            return this.__colorify(color)
        } else {
            console.log(replacer("&3[Colors]&r &cSupported colors are only: &a"+ this.Colors.join(", ")))
        }
    }
    __colorify(color){
        if(this.Colors.includes(color.toLowerCase())){
            if(color.toLowerCase() === "blue"){
                return this.Codes.blue
            }
            if(color.toLowerCase() === "red"){
                return this.Codes.red
            }
            if(color.toLowerCase() === "green"){
                return this.Codes.green
            }
        }
    }
}
module.exports = colors;