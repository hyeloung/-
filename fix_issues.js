const fs = require('fs');

// 1. Update style.css
let css = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', 'utf8');

css = css.replace('.bowel-btn {\r\n    position: fixed;\r\n    bottom: 4%;\r\n    left: 50%;\r\n    transform: translateX(-50%);', 
.bowel-btn {
    position: fixed;
    top: 2%;
    right: 5%;
    bottom: auto;
    left: auto;
    transform: none;);
    
css = css.replace('padding: 14px 28px;\r\n    border-radius: 30px;', 'padding: 12px 20px;\r\n    border-radius: 12px;');
css = css.replace('animation: bounce 2s infinite;', '');

css = css.replace('animation: pulse 2s infinite;', 'animation: fadeOutHint 4s forwards;');
if (!css.includes('keyframes fadeOutHint')) {
    css += \n@keyframes fadeOutHint {
    0% { opacity: 0; }
    10% { opacity: 0.9; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
    70% { opacity: 0.9; }
    100% { opacity: 0; display: none; pointer-events: none; }
}\n;
}

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\style.css', css, 'utf8');

// 2. Update app.js
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');
// Fix updateOverlays
const oldUpdate = } else if (pageObjNum >= 4 && pageObjNum <= 15) {
        backBtn.classList.remove('hidden');
        if (bowelBtn) bowelBtn.classList.remove('hidden');
    }
};
const newUpdate = } else if (pageObjNum >= 4 && pageObjNum <= 15) {
        backBtn.classList.remove('hidden');
        if (bowelBtn) bowelBtn.classList.remove('hidden');
    } else if (pageObjNum === 16) {
        fullOverlay.classList.remove('hidden');
        if (tapHintText) {
            tapHintText.innerText = '화면을 터치하면 처음으로 돌아갑니다';
            tapHintText.style.animation = 'none';
            tapHintText.offsetHeight;
            tapHintText.style.animation = null;
        }
        if (contactInfo) contactInfo.classList.remove('hidden');
    }
    
    // Trigger animation for tapHintText on other pages too
    if ((pageObjNum === 1 || pageObjNum === 2) && tapHintText) {
        tapHintText.style.animation = 'none';
        tapHintText.offsetHeight;
        tapHintText.style.animation = null;
    }
};
app = app.replace(oldUpdate, newUpdate);
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');

// 3. Update index.html cache
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('app.js?v=28', 'app.js?v=29');
html = html.replace('style.css?v=26', 'style.css?v=27');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');
