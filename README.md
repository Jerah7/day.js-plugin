Day.js Localised Format 

This example demonstrates how to use the Day.js library in Node.js to format dates and times using localised formats.

Prerequisites
-Node.js installed on your machine.

How to use
    1. Clone the repository
        git clone https://github.com/Jerah7/day.js-plugin.git

    2. Installation
        In terminal write the following commands:
            npm install dayjs
            npm install dayjs/plugin/localizedFormat

    3. Run script
        In termainal write the following command:
            node index.js

       - You should see the current date and time outputted in a localised format, for example: Wednesday, May 23, 2024 3:45 PM

Customisation
You can customize the format string passed to the format method to display the date and time in different formats. 
For example:
     javascript
        console.log(myDate.format('LL'));   // May 23, 2024
        console.log(myDate.format('LTS'));  // 3:45:12 PM

Refer to the Day.js documentation for more formatting options.

