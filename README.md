# Gulp Kinesis Consumer

This is a basic gulp task to print out the events off of a kinesis stream. It starts at `TRIM_HORIZON` by default, which can be changed by setting `oldest` to `true`.

There are two tasks available:
  - `listen`
  - `listStreams`

To listen to a specific stream, change the `gulpfile.js` `STREAM_NAME` to the desired stream.

The `default` task is to list out the streams available, which is useful to know if your AWS credentials are setup correctly on your system.
