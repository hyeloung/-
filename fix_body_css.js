const fs = require('fs');
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');

css = css.replace(/html, body {[\s\S]*?min-height: 100%;\s*}/, `html, body {
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow-x: hidden !important;
}`);

// Check if we need to remove an extra closing brace at the end
css = css.trim();
if (css.endsWith('}\n}')) {
    css = css.slice(0, -1);
} else if (css.endsWith('}\r\n}')) {
    css = css.slice(0, -2);
} else if (css.endsWith('}}')) {
    css = css.slice(0, -1);
}

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');
