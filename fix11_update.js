const fs = require('fs');

// Copy image
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784473036160.jpg', 'C:\\Users\\LG\\Desktop\\PO\\page11.jpg');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replaceAll('v=39', 'v=40');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js (no change to logic, just rewriting just in case)
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
