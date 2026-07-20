const fs = require('fs');
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');

// Replace the media queries with the simplified ones
const regex = /\/\* Default for all screen-img \*\/[\s\S]*?\/\* For desktop \(width > 768px\) \*\/[\s\S]*?\}/;
const newCss = `/* Default for all screen-img */
.screen-img {
    width: 100%;
    display: block;
}

/* For smartphones (width <= 1024px) */
@media (max-width: 1024px) {
    .screen-img {
        height: 100vh !important;
        object-fit: fill !important;
    }
}

/* For desktop (width > 1024px) */
@media (min-width: 1025px) {
    .screen-img {
        height: auto !important;
    }
}`;

css = css.replace(regex, newCss);
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');

// Bump cache
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('app.js?v=34', 'app.js?v=35');
html = html.replace('style.css?v=34', 'style.css?v=35');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
