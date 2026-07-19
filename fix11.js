const fs = require('fs');

// Copy image
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784472790919.jpg', 'C:\\Users\\LG\\Desktop\\PO\\page11.jpg');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('<img id="page10-img" class="hidden" src="page10.png?v=38" style="width: 100%; height: auto; display: block;" alt="Page 10">', '<img id="page10-img" class="hidden" src="page10.png?v=39" style="width: 100%; height: auto; display: block;" alt="Page 10">\n                <img id="page11-img" class="hidden" src="page11.jpg?v=39" style="width: 100%; height: auto; display: block;" alt="Page 11">');
html = html.replaceAll('v=38', 'v=39');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
app = app.replace("['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page6-img', 'page7-img', 'page8-img', 'page9-img', 'page10-img', 'page12-img', 'page13-img', 'page14-img']", "['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page6-img', 'page7-img', 'page8-img', 'page9-img', 'page10-img', 'page11-img', 'page12-img', 'page13-img', 'page14-img']");
app = app.replace("if (num === 1 || num === 2 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9 || num === 10 || num === 12 || num === 13 || num === 14)", "if (num === 1 || num === 2 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9 || num === 10 || num === 11 || num === 12 || num === 13 || num === 14)");
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
