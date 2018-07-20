var llog = require('./index').init(null, true);

llog.warning('This is a warning');
llog.debug('This is a debug message!');
llog.info('Just wanted to let you know this info.');
llog.error('Something really bad just happened :(');

llog.info('You can also add a flag', 'I\'m the flag');

var llogtime = require('./index').init('testclass', true);
llogtime.info('You can also add a time stamp', 'Example with time stamp');
