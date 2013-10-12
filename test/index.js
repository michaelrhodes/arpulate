var run = require('tape').test
var arp = require('arp-table')
var parse = require('arp-parse')
var localip = require('my-local-ip')()
var arpulate = require('../')

run('add 20 addresses that surround the local computer', function(test) {
  arpulate(localip, 20, function() {

    var addresses = []
    var parser = parse()

    arp().stdout
      .pipe(parser)

    parser.on('data', function(device) {
      addresses.push(device.ip)
    })

    parser.on('end', function() {
      var neighbours = addresses.filter(function(ip) {
        return ip !== localip
      })
      test.ok(neighbours.length >= 20, localip + ' now has at least 20 neighbouring addresses')
      test.end()
    })  

  })
})
