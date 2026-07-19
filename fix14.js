const fs = require('fs');

// Copy image
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784471918685.png', 'C:\\Users\\LG\\Desktop\\PO\\page14.png');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('<img id="page13-img" class="hidden" src="page13.png?v=36" style="width: 100%; height: auto; display: block;" alt="Page 13">', '<img id="page13-img" class="hidden" src="page13.png?v=37" style="width: 100%; height: auto; display: block;" alt="Page 13">\n                <img id="page14-img" class="hidden" src="page14.png?v=37" style="width: 100%; height: auto; display: block;" alt="Page 14">');
html = html.replaceAll('v=36', 'v=37');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
app = app.replace("['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page6-img', 'page8-img', 'page9-img', 'page10-img', 'page12-img', 'page13-img']", "['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page6-img', 'page8-img', 'page9-img', 'page10-img', 'page12-img', 'page13-img', 'page14-img']");
app = app.replace("if (num === 1 || num === 2 || num === 4 || num === 5 || num === 6 || num === 8 || num === 9 || num === 10 || num === 12 || num === 13)", "if (num === 1 || num === 2 || num === 4 || num === 5 || num === 6 || num === 8 || num === 9 || num === 10 || num === 12 || num === 13 || num === 14)");
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
