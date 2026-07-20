const fs = require('fs');
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');

css += `\n/* For smartphones */
@media (max-width: 1024px) {
    .screen-img {
        height: 100vh !important;
        object-fit: fill !important;
    }
}
`;

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');

let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('style.css?v=43', 'style.css?v=44');
html = html.replace('app.js?v=43', 'app.js?v=44');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
