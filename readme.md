# arpulate
arpulate populates the system ARP table by pinging a range of surrounding IP addresses.

## Install
```
npm install arpulate
```

## API
``` 
arpulate(
  
  address (string):
    the ip address you want the range to
    surround.

  total (int):
    the number of addresses you wish to ping.

  callback (function):
    called after all addresses have responded
    or timed out. no arguments.

)
```

### Example
``` js
var arpulate = require('arpulate')

arpulate('192.168.0.10', 20, function() {
 console.log('All done') 
})
```

### License
[MIT](http://opensource.org/licenses/MIT)
