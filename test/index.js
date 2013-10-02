var run = require('tape').test
var arp = require('arp-table')
var parseip = require('parse-ipv4')
var split = require('split')()
var localip = require('my-local-ip')()
var arpulate = require('../')

run('Add 20 surrounding addresses', function(test) {
  arpulate(20, function() {

    var addresses = []

    arp().stdout
      .pipe(parseip)
      .pipe(split)

    split.on('data', function(address) {
      addresses.push(address.toString()) 
    })

    split.on('end', function(address) {
      var neighbours = addresses.filter(function(ip) {
        return ip !== localip
      })
      test.ok(neighbours.length >= 20, 'at least 20 neighbours')
      test.end()
    })  

  })
})
