const fs = require('fs');
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');

// Find the index of "/* Default for all screen-img */"
const idx = css.indexOf('/* Default for all screen-img */');
if (idx !== -1) {
    css = css.substring(0, idx);
}

// Append the pure, clean class
css += `/* Default for all screen-img */
.screen-img {
    width: 100% !important;
    height: auto !important;
    display: block;
}
`;

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');

let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('style.css?v=41', 'style.css?v=42');
html = html.replace('app.js?v=41', 'app.js?v=42');
html = html.replace('style.css?v=42', 'style.css?v=42'); // Just in case it was already 42
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
