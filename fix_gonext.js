const fs = require('fs');
let currentApp = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');

if (!currentApp.includes('function goNext')) {
    const codeToAppend = 
function goNext() {
    if (currentPage === 1) {
        showPage(2);
    } else if (currentPage === 2) {
        showPage(3);
    } else if (currentPage >= 4 && currentPage <= 15) {
        showPage(16);
    } else if (currentPage === 16) {
        showPage(1);
    }
}
;
    currentApp += "\n" + codeToAppend;
    fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', currentApp, 'utf8');
}

let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('app.js?v=27', 'app.js?v=28');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
