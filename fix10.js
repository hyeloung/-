const fs = require('fs');

// Copy image
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784471090801.png', 'C:\\Users\\LG\\Desktop\\PO\\page10.png');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('<img id="page9-img" class="hidden" src="page9.png?v=33" style="width: 100%; height: auto; display: block;" alt="Page 9">', '<img id="page9-img" class="hidden" src="page9.png?v=34" style="width: 100%; height: auto; display: block;" alt="Page 9">\n                <img id="page10-img" class="hidden" src="page10.png?v=34" style="width: 100%; height: auto; display: block;" alt="Page 10">');
html = html.replaceAll('v=33', 'v=34');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
app = app.replace("['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page6-img', 'page8-img', 'page9-img', 'page12-img', 'page13-img']", "['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page6-img', 'page8-img', 'page9-img', 'page10-img', 'page12-img', 'page13-img']");
app = app.replace("if (num === 1 || num === 2 || num === 4 || num === 5 || num === 6 || num === 8 || num === 9 || num === 12 || num === 13)", "if (num === 1 || num === 2 || num === 4 || num === 5 || num === 6 || num === 8 || num === 9 || num === 10 || num === 12 || num === 13)");
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
