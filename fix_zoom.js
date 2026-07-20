const fs = require('fs');

// Update style.css
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');
css = css.replace('overflow: hidden;', '/* overflow: hidden; removed for zooming */');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('onclick="showPage(8)">대변 양상 확인하기', 'onclick="showPage(16)">대변 양상 확인하기');
html = html.replace('style.css?v=25', 'style.css?v=26');
html = html.replaceAll('v=44', 'v=45'); // bump cache for imgs just in case
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
app = app.replace("fullOverlay.classList.remove('hidden');\n        if (tapHintText) tapHintText.innerText = '화면을 터치하여 대변 양상 확인하기';", "if (bowelBtn) bowelBtn.classList.remove('hidden');");
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
