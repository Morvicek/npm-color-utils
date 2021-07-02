# npm-color-utils
Color utils have cool color functions

- Import
```js
const {Color, GetHex, GetRgb, SColor} = require("npm-color-utils");
//OR
const Colors = require("npm-color-utils");
```

- Example
```js
const {Color, GetHex, GetRgb, SColor} = require("npm-color-utils");

//Colorify 
console.log(new Color("&c&qHello World!").getText())
//Easy version
console.log(SColor("&c&qHello World!"))
//You can also use SimpleColor("text"), but you must import it.

//OTHER THINGS
//hex
//GetHex(RED,Green,blue,alpha,(if you want json version just type true))
console.log(GetHex(25,25,25))

//RGB
console.log(GetRgb("#HEX"))//Returns Json if you want text: GetRgb("#HEX", true)

//OR 
const Colors = require("npm-color-utils");
Console.log(Colors.SColor("&cHello"))
```

- Codes
```diff
- COLORS

+ &c RED
+ &a Green
+ &e Yellow
+ &b Blue
+ &d Purple
+ &3 Cyan
+ &f White

- Other
+ &r Reset
+ &q Bold
+ &n Underline

- MORE SOON
```