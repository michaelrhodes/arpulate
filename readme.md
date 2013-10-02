# arpulate
arpulate populates the system ARP table by pinging a range of IP addresses that surround the local computer.

## Install
```
npm install arpulate
```

## API
``` 
arpulate(

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

arpulate(20, function() {
 console.log('All done') 
})
```

### License
[MIT](http://opensource.org/licenses/MIT)
