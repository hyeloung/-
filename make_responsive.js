const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace(/style="width: 100%; height: 100vh; display: block;"/g, 'class="hidden screen-img"');
// Wait, class="hidden" is already there!
html = html.replace(/class="hidden" src="([^"]+)" style="width: 100%; height: 100vh; display: block;"/g, 'class="hidden screen-img" src="$1"');
html = html.replace('style.css?v=30', 'style.css?v=31');
html = html.replace('app.js?v=30', 'app.js?v=31');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// 2. Update style.css
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');
css += `
/* Default for all screen-img */
.screen-img {
    width: 100%;
    display: block;
}

/* For smartphones (width <= 768px) */
@media (max-width: 768px) {
    .screen-img {
        height: 100vh;
        object-fit: fill;
    }
}

/* For desktop (width > 768px) */
@media (min-width: 769px) {
    .screen-img {
        height: auto;
    }
}
`;
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');
