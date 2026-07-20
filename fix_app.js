const fs = require('fs');

let oldApp = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\temp_app.js', 'utf8');
let currentApp = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');

const match = oldApp.match(/function showPage\(num\) \{[\s\S]*$/);
if (match) {
    currentApp += "\n\n" + match[0];
    fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', currentApp, 'utf8');
    console.log("Fixed!");
} else {
    console.log("Could not find showPage in temp_app.js");
}
