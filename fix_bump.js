const fs = require('fs');
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('style.css?v=40', 'style.css?v=41');
html = html.replace('app.js?v=40', 'app.js?v=41');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
