const fs = require('fs');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
// replace height: auto; with height: 100vh;
html = html.replace(/height: auto;/g, 'height: 100vh;');
html = html.replaceAll('v=45', 'v=46');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
