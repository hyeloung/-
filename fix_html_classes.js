const fs = require('fs');
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');

// Replace duplicate class="hidden screen-img"
html = html.replace(/class="hidden" src="([^"]+)" class="hidden screen-img"/g, 'class="hidden screen-img" src=""');

// Bump style.css and app.js version
html = html.replace('style.css?v=31', 'style.css?v=32');
html = html.replace('app.js?v=31', 'app.js?v=32');

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
