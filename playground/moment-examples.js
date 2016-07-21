var moment = require('moment');

// console.log(moment().format());

var now = moment()

console.log('current timestamp', now.unix());

var timestamp = 1459101749
var currentMoment = moment.unix(timestamp)

console.log('currentMoment',currentMoment.format('MMM D, YYYY @ h:mm a'));

console.log('challenge', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
