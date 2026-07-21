const fs = require('fs');
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784670442902.png', 'C:\\Users\\LG\\Desktop\\PO\\page5.png');

let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('page5.png?v=48', 'page5.png?v=49');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

console.log("Image copied and cache bumped.");
