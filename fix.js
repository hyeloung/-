const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<img id="page8-img" class="hidden" src="page8.png?v=27" style="width: 100%; height: auto; display: block;" alt="Page 8">', '<img id="page8-img" class="hidden" src="page8.png?v=30" style="width: 100%; height: auto; display: block;" alt="Page 8">\n                <img id="page12-img" class="hidden" src="page12.png?v=30" style="width: 100%; height: auto; display: block;" alt="Page 12">\n                <img id="page13-img" class="hidden" src="page13.png?v=30" style="width: 100%; height: auto; display: block;" alt="Page 13">');
html = html.replaceAll('v=27', 'v=30');
fs.writeFileSync('index.html', html, 'utf8');

let app = fs.readFileSync('app.js', 'utf8');
app = app.replace("['page1-img', 'page2-img', 'page4-img', 'page8-img']", "['page1-img', 'page2-img', 'page4-img', 'page8-img', 'page12-img', 'page13-img']");
app = app.replace("if (num === 1 || num === 2 || num === 4 || num === 8)", "if (num === 1 || num === 2 || num === 4 || num === 8 || num === 12 || num === 13)");
fs.writeFileSync('app.js', app, 'utf8');
