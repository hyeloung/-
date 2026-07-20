const fs = require('fs');
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');

css = css.replace(/html, body {[\s\S]*?min-height: 100%;\s*}/, `html, body {
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow-x: hidden !important;
}`);

css = css.replace(/@media \(min-width: 1025px\) {[\s\S]*?}/, `@media (min-width: 1025px) {
    .screen-img {
        width: 150vw !important;
        margin-left: -25vw !important;
        height: auto !important;
        object-fit: unset !important;
    }
}`);

// Trim extra closing brace if it exists
css = css.trim();
if (css.endsWith('}\n}')) {
    css = css.slice(0, -1);
} else if (css.endsWith('}\r\n}')) {
    css = css.slice(0, -2);
}

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');

let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('style.css?v=39', 'style.css?v=40');
html = html.replace('app.js?v=39', 'app.js?v=40');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
