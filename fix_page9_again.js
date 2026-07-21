const fs = require('fs');
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784670644278.png', 'C:\\Users\\LG\\Desktop\\PO\\page9.png');

let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('page9.png?v=50', 'page9.png?v=51');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

console.log("Image copied and cache bumped.");
