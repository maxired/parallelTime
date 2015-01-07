var parallelTime = require('../');
parallelTime.debugTime(2000);

var measure = parallelTime.startMeasure();

setTimeout(function(){
measure.stop();

}, 3000);
