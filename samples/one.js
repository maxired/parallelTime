var paralleltime = require('../');
paralleltime.debugTime(2000);

var measure = paralleltime.startMeasure();

setTimeout(function(){
measure.stop();

}, 3000);
