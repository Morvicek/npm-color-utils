const axios = require("axios")
module.exports = async () => {
    var version = require("../index").Version

    var ColorUpdate = await axios.get("https://registry.npmjs.org/npm-color-utils")
    var stableVersion = ColorUpdate.data["dist-tags"].latest
    //console.log(version)
    //console.log(stableVersion)
    if(stableVersion != version && !version.includes("dev")) {
        console.log("\x1b[36m\u001b[1m[Color Update]\x1b[0m \x1b[31mNew update! \x1b[35mhttps://www.npmjs.com/package/npm-color-utils \x1b[33m(You have version \u001b[1m" + version + "\x1b[0m\x1b[33m. Stable version is \u001b[1m" + stableVersion + "\x1b[0m\x1b[33m) \x1b[0m ")
    } else if(version.includes("dev")) {
        console.log("\x1b[36m[Color Update] \x1b[31mYou have the dev version\x1b[0m")
    }
}