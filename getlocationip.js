/**
 * @ Module name
 * @ authors: H.yingzi - h.yingzi@gmail.com
 * @ team: Digiocean - http://www.digiocean.cc
 * @ date: 2016-06-22 18:43
 * @ version: 0.0.0
 *
 */
/*
    TODO:
*/

module.exports = function() {
    var ip = null,
        ifaces = require("os").networkInterfaces()

    Object.keys(ifaces).forEach(function(ifname) {
        var alias = 0

        ifaces[ifname].forEach(function(iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                return
            }

            if (alias < 1) {
                ip = iface.address
            }
            ++alias
        })
    })
    return ip
}
