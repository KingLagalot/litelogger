# litelogger
Simple and colorful logger that's easy on the eyes ;)

## Usage
Require at the top of your file:

`const llog = require('litelogger').init('FileName', true);`

Arguments for `.init()`:
* Name of file that will show up on all log messages. Can be null if one is not desired
* Boolean: would you like a timestamp on your log messages

![alt text](https://github.com/KingLagalot/litelogger/raw/master/example.png "LiteLogger Example")

There are four types of messages:
```
llog.warning('This is a warning');
llog.debug('This is a debug message!');
llog.info('Just wanted to let you know this info.');
llog.error('Something really bad just happened :(');

// To add a flag
llog.info('You can also add a flag', 'Im the flag');
```
Output:
```
 warning - [testclass] This is a warning
   debug - [testclass] This is a debug message!
   info  - [testclass] Just wanted to let you know this info.
   error - [testclass] Something really bad just happened :(
   info  - [testclass][I'm the flag] You can also add a flag
```

## Versions
# 1.0.1
* Filename can now be passed as null and will not appear
