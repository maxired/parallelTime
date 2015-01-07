
var totalTime = 0;
var measureStarted = 0;
var measureStopped = 0;

var unitTimeStart = undefined;
var unitTime = 0;

function Measure(){
  var self = this;

    measureStarted++;
  var measureTimeStart = process.hrtime();
  unitTimeStart = unitTimeStart || measureTimeStart;
  return { stop : function(){
    var measureTimeStop = process.hrtime();
    measureStopped++;
    if( measureStopped == measureStarted ) {
      // no more running
      unitTime   += (measureTimeStop[0] - unitTimeStart[0]) * 1000000000 + ( measureTimeStop[1] - unitTimeStart[1]);
      unitTimeStart = undefined;
    }

    totalTime += (measureTimeStop[0] - measureTimeStart[0]) * 1000000000 + ( measureTimeStop[1] - measureTimeStart[1]);
  }

  }
};


var debugging = false;
module.exports = {

startMeasure : function(){
                 return new Measure();
               },
stopMeasure : function( measure){
                measure.stop();
              },
getTotalHrTime : function(){
                   return [ Math.floor(totalTime / 1000000000) , totalTime % 1000000000];
                 },
debugTime : function(interval){
              if(debugging) return;              
              debugging  = true;

              interval = interval || 2000;
              setInterval( function( ) { 
                  console.log('[paralleltime]', 'total time is ', module.exports.getTotalHrTime());
                  console.log('[paralleltime]', 'unit time is ', [ Math.floor(unitTime/1000000000) , unitTime%1000000000 ]);
                  console.log('[paralleltime]', 'finished measure is ', measureStopped);
                  console.log('[paralleltime]', 'running measure is ', measureStarted-measureStopped);

                  measureStopped &&     console.log('[paralleltime]', 'mean time is ',  Math.floor(unitTime/measureStopped/1000), "ns");

                  }, interval );
            }
};


var debugEnviron = process.env.NODE_DEBUG || '';
var set = "paralleltime";
if(new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
  module.exports.debugTime(2000);
}



