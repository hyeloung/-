const fs = require('fs');
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');

const newFunc = unction updateOverlays(pageObjNum) {
    const fullOverlay = document.getElementById('full-overlay');
    const medOverlay = document.getElementById('med-overlay');
    const backBtn = document.getElementById('back-btn');
    const bowelBtn = document.getElementById('bowel-btn');
    const tapHintText = document.getElementById('tap-hint-text');
    const contactInfo = document.getElementById('contact-info');

    fullOverlay.classList.add('hidden');
    medOverlay.classList.add('hidden');
    backBtn.classList.add('hidden');
    if (bowelBtn) bowelBtn.classList.add('hidden');
    if (contactInfo) contactInfo.classList.add('hidden');

    if (pageObjNum === 1 || pageObjNum === 2) {
        fullOverlay.classList.remove('hidden');
        if (tapHintText) tapHintText.innerText = '화면을 터치하여 다음으로 넘어가세요';
    } else if (pageObjNum === 3) {
        medOverlay.classList.remove('hidden');
    } else if (pageObjNum >= 4 && pageObjNum <= 15) {
        backBtn.classList.remove('hidden');
        if (bowelBtn) bowelBtn.classList.remove('hidden');
    }
};

// We will replace everything from "function updateOverlays(pageObjNum) {" to the end of the file or just match the block.
app = app.replace(/function updateOverlays\(pageObjNum\) \{[\s\S]*\}\s*$/m, newFunc);
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
