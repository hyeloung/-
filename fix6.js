const fs = require('fs');

// Copy image
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784470996783.png', 'C:\\Users\\LG\\Desktop\\PO\\page6.png');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('<img id="page5-img" class="hidden" src="page5.png?v=32" style="width: 100%; height: auto; display: block;" alt="Page 5">', '<img id="page5-img" class="hidden" src="page5.png?v=33" style="width: 100%; height: auto; display: block;" alt="Page 5">\n                <img id="page6-img" class="hidden" src="page6.png?v=33" style="width: 100%; height: auto; display: block;" alt="Page 6">');
html = html.replaceAll('v=32', 'v=33');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
app = app.replace("['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page8-img', 'page9-img', 'page12-img', 'page13-img']", "['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page6-img', 'page8-img', 'page9-img', 'page12-img', 'page13-img']");
app = app.replace("if (num === 1 || num === 2 || num === 4 || num === 5 || num === 8 || num === 9 || num === 12 || num === 13)", "if (num === 1 || num === 2 || num === 4 || num === 5 || num === 6 || num === 8 || num === 9 || num === 12 || num === 13)");
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
