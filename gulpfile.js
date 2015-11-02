var gulp   = require('gulp');
var kinesis = require('kinesis');
var KinesisStream = kinesis.KinesisStream;

var STREAM_NAME = '';
var OLDEST = false;
var REGION = 'eu-west-1';

function extractDataFromKinesisEvent(event) {
  return event.Data.toString("utf-8");
};

function dataPrinter(event) { 
  console.log(extractDataFromKinesisEvent(event)); 
};

gulp.task('listen', function() {
  var kinesisSource = kinesis.stream({region: REGION, name: STREAM_NAME, oldest: OLDEST});
  return kinesisSource.on('data', dataPrinter);
});

gulp.task('listStreams', function() {
  return kinesis.listStreams({region: REGION}, function(err, streams) {
    if (err) throw err

    console.log(streams)
  });
});

gulp.task('default', ['listStreams']);
