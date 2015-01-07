# paralleltime
NodeJs library to measure time taken by a part of your software. It is speacilly adapated when you want to measure how much time you spend in a specific function before it calls the callback.

It is called 'paralleltime', because you can do several simultanusly measures.
'Total time' is the addition of all the measure, wherease 'Unit Time' is the total duration while at least one measure was runnning.

Usages

```javascript
var paralleltime = require('paralleltime');
paralleltime.debugTime(2000);

var measure = paralleltime.startMeasure();

setTimeout(function(){
   measure.stop();
}, 3000);

```

Output is :
```
[paralleltime] total time is  [ 0, 0 ]
[paralleltime] unit time is  [ 0, 0 ]
[paralleltime] finished measure is  0
[paralleltime] running measure is  1
[paralleltime] total time is  [ 3, 4885944 ]
[paralleltime] unit time is  [ 3, 4885944 ]
[paralleltime] finished measure is  1
[paralleltime] running measure is  0
[paralleltime] mean time is  3004885 ns
```
