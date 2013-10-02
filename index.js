var localip = require('my-local-ip')()
var range = require('ipv4-range')
var ping = require('ping').sys.probe

module.exports = function(total, callback) {

  var countdown = total
 
  // Get a range of surrounding IP addresses
  range(localip, total)
  
  // Add them to the ARP table
  .forEach(function(address, index) {
    ping(address, function(alive) {
      // We could ideally remove dead 
      // addresses from the table at
      // this point.
      if (--countdown === 0) {
        callback() 
      }
    })
  })

}
