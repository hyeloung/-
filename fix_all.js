const fs = require('fs');
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');

// Remove all media queries for screen-img
css = css.replace(/\/\* For smartphones[\s\S]*?}\s*}\s*/, '');
css = css.replace(/\/\* For desktop[\s\S]*?}\s*}\s*/, '');

// Clean up any other straggling media queries
const lines = css.split('\n');
const newLines = [];
let inMediaQuery = false;
for (let line of lines) {
    if (line.includes('@media')) {
        inMediaQuery = true;
    }
    if (!inMediaQuery) {
        newLines.push(line);
    } else {
        if (line.trim() === '}') {
            inMediaQuery = false;
        }
    }
}
css = newLines.join('\n');

// Ensure screen-img is pure width 100%
css = css.replace(/\.screen-img\s*{[^}]*}/, `.screen-img {
    width: 100% !important;
    height: auto !important;
    display: block;
}`);

// Ensure html, body overflow is unset
css = css.replace(/overflow-x: hidden !important;/g, '');

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');

let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('style.css?v=41', 'style.css?v=42');
html = html.replace('app.js?v=41', 'app.js?v=42');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
