const fs = require('fs');

// Copy image
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784470455417.png', 'C:\\Users\\LG\\Desktop\\PO\\page9.png');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('<img id="page8-img" class="hidden" src="page8.png?v=30" style="width: 100%; height: auto; display: block;" alt="Page 8">', '<img id="page8-img" class="hidden" src="page8.png?v=31" style="width: 100%; height: auto; display: block;" alt="Page 8">\n                <img id="page9-img" class="hidden" src="page9.png?v=31" style="width: 100%; height: auto; display: block;" alt="Page 9">');
html = html.replaceAll('v=30', 'v=31');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
app = app.replace("['page1-img', 'page2-img', 'page4-img', 'page8-img', 'page12-img', 'page13-img']", "['page1-img', 'page2-img', 'page4-img', 'page8-img', 'page9-img', 'page12-img', 'page13-img']");
app = app.replace("if (num === 1 || num === 2 || num === 4 || num === 8 || num === 12 || num === 13)", "if (num === 1 || num === 2 || num === 4 || num === 8 || num === 9 || num === 12 || num === 13)");
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
