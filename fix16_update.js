const fs = require('fs');

// Copy image
fs.copyFileSync('C:\\Users\\LG\\.gemini\\antigravity\\brain\\9099f388-8581-4fa1-b388-668740ae9b49\\media__1784575078984.jpg', 'C:\\Users\\LG\\Desktop\\PO\\page16.jpg');

// Update index.html
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
// Remove contact-info div block entirely
html = html.replace(/<div id="contact-info".*?<\/div>/s, '');
html = html.replaceAll('v=43', 'v=44');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

// Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
app = app.replace(/const contactInfo = document\.getElementById\('contact-info'\);\s*if \(contactInfo\) contactInfo\.style\.backgroundColor = '.*?';/g, '');
app = app.replace(/const contactInfo = document\.getElementById\('contact-info'\);\s*if \(contactInfo\) contactInfo\.classList\.add\('hidden'\);/g, '');
app = app.replace(/} else if \(pageObjNum === 16\) \{\s*if \(contactInfo\) contactInfo\.classList\.remove\('hidden'\);\s*}/g, '');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
