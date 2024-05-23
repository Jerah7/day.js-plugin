//imoorts the Days.js library using node Node.js.
const dayjs = require('dayjs');

//imports the localizedFormat plugin for Dayjs.js which allows locallised formatting.
const localizedFormat = require('dayjs/plugin/localizedFormat');

/*This extends Day.js's capabilities to include the localized formatting 
functionality provided by the plugin*/
dayjs.extend(localizedFormat);

/* This creates a Day.js object representing the current date and time. 
Since no arguments are provided to dayjs(), it defaults to the current date and time.*/
const myDate = dayjs();

// This outputs the date and time in a localised format.
console.log(myDate.format('LLLL'));
