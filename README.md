# parallelTime
NodeJs library to measure time taken by a part of your software. It is speacilly adapated when you want to measure how much time you spend in a specific function before it calls the callback.

It is called 'parallelTime', because you can do several simultanusly measures.
'Total time' is the addition of all the measure, wherease 'Unit Time' is the total duration while at least one measure was runnning.

Usages

```javascript
var parallelTime = require('parallelTime');
parallelTime.debugTime(2000);

var measure = parallelTime.startMeasure();

setTimeout(function(){
   measure.stop();
}, 3000);

```

Output is :
```
[parallelTime] total time is  [ 0, 0 ]
[parallelTime] unit time is  [ 0, 0 ]
[parallelTime] finished measure is  0
[parallelTime] running measure is  1
[parallelTime] total time is  [ 3, 4885944 ]
[parallelTime] unit time is  [ 3, 4885944 ]
[parallelTime] finished measure is  1
[parallelTime] running measure is  0
[parallelTime] mean time is  3004885 ns
```
