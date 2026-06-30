// Setup PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let pdfDoc = null;
let currentPage = 1;
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

// Load the PDF
const pdfData = atob(pdfBase64Data);
pdfjsLib.getDocument({data: pdfData}).promise.then(pdf => {
    pdfDoc = pdf;
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('screen-container').classList.remove('hidden');
    showPage(1);
}).catch(err => {
    document.getElementById('loading').innerText = 'PDF 파일을 불러오지 못했습니다.';
    console.error(err);
});

function renderPage(num) {
    const pdfPageNum = num === 16 ? 2 : num;

    pdfDoc.getPage(pdfPageNum).then(page => {
        // Calculate scale to fit canvas width to container width
        const container = document.getElementById('screen-container');
        const viewportUnscaled = page.getViewport({ scale: 1 });
        
        // Scale only based on width to fill the screen horizontally
        const scale = container.clientWidth / viewportUnscaled.width;
        
        // Increase scale for better resolution on high DPI screens
        const renderScale = scale * (window.devicePixelRatio || 1);
        const viewport = page.getViewport({ scale: renderScale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        page.render(renderContext).promise.then(() => {
            const wrapper = document.getElementById('canvas-wrapper');
            const cssHeight = viewport.height / (window.devicePixelRatio || 1);

            // Adjust this ratio to perfectly split above "마지막으로 대변 양상 확인해주세요."
            const CUT_RATIO = 0.66; 

            if (num === 2) {
                // Show top portion
                wrapper.style.height = (cssHeight * CUT_RATIO) + 'px';
                canvas.style.marginTop = '0px';
            } else if (num === 16) {
                // Show bottom portion
                wrapper.style.height = (cssHeight * (1 - CUT_RATIO)) + 'px';
                canvas.style.marginTop = `-${cssHeight * CUT_RATIO}px`;
            } else {
                wrapper.style.height = cssHeight + 'px';
                canvas.style.marginTop = '0px';
            }
        });
        
        // Scroll to top when page changes
        container.scrollTo(0, 0);
    });
}

function updateOverlays(pageObjNum) {
    const fullOverlay = document.getElementById('full-overlay');
    const medOverlay = document.getElementById('med-overlay');
    const backBtn = document.getElementById('back-btn');
    const bowelBtn = document.getElementById('bowel-btn');
    const tapHintText = document.getElementById('tap-hint-text');

    fullOverlay.classList.add('hidden');
    medOverlay.classList.add('hidden');
    backBtn.classList.add('hidden');
    if (bowelBtn) bowelBtn.classList.add('hidden');

    if (pageObjNum === 1 || pageObjNum === 2) {
        fullOverlay.classList.remove('hidden');
        if (tapHintText) tapHintText.innerText = '화면을 터치하여 다음으로 넘어가세요';
    } else if (pageObjNum === 3) {
        medOverlay.classList.remove('hidden');
    } else if (pageObjNum >= 4 && pageObjNum <= 15) {
        backBtn.classList.remove('hidden');
        fullOverlay.classList.remove('hidden');
        if (tapHintText) tapHintText.innerText = '화면을 터치하여 대변 양상 확인하기';
    } else if (pageObjNum === 16) {
        fullOverlay.classList.remove('hidden');
        if (tapHintText) tapHintText.innerText = '화면을 터치하면 처음으로 돌아갑니다';
    }
}

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
