const fs = require('fs');
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');

// The regex left an extra '}' at the end, let's just trim the file and remove trailing '}' if it's there
css = css.trim();
if (css.endsWith('}')) {
    // Check if the block is properly closed
    // Let's just rewrite the bottom section to be safe
    css = css.replace(/@media \(min-width: 1025px\) {[\s\S]*?}\s*}/, `@media (min-width: 1025px) {
    .screen-img {
        height: auto !important;
    }
}`);
}
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');
