const fs = require('fs');
let currentApp = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');

// Check if showPage exists
if (!currentApp.includes('function showPage')) {
    const codeToAppend = 
function showPage(num) {
    if (!pdfDoc) return;
    currentPage = num;
    renderPage(currentPage);
    updateOverlays(currentPage);
}

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
