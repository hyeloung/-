const fs = require('fs');

// Copy image
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784574499153.jpg', 'C:\\Users\\LG\\Desktop\\PO\\page3.jpg');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('<img id="page2-img" class="hidden" src="page2.png?v=42" style="width: 100%; height: auto; display: block;" alt="Page 2">', '<img id="page2-img" class="hidden" src="page2.png?v=43" style="width: 100%; height: auto; display: block;" alt="Page 2">\n                <img id="page3-img" class="hidden" src="page3.jpg?v=43" style="width: 100%; height: auto; display: block;" alt="Page 3">');
html = html.replaceAll('v=42', 'v=43');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
app = app.replace("['page1-img', 'page2-img', 'page4-img', 'page5-img', 'page6-img', 'page7-img', 'page8-img', 'page9-img', 'page10-img', 'page11-img', 'page12-img', 'page13-img', 'page14-img', 'page15-img', 'page16-img']", "['page1-img', 'page2-img', 'page3-img', 'page4-img', 'page5-img', 'page6-img', 'page7-img', 'page8-img', 'page9-img', 'page10-img', 'page11-img', 'page12-img', 'page13-img', 'page14-img', 'page15-img', 'page16-img']");
app = app.replace("if (num === 1 || num === 2 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9 || num === 10 || num === 11 || num === 12 || num === 13 || num === 14 || num === 15 || num === 16)", "if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9 || num === 10 || num === 11 || num === 12 || num === 13 || num === 14 || num === 15 || num === 16)");
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
