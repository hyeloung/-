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
        
        // Scale based on width to fill the screen horizontally
        let scale = container.clientWidth / viewportUnscaled.width;
        
        // Zoom in specifically for the bowel pattern page to make it readable and cut white margins
        if (num === 16) {
            // Zoom more on mobile, slightly on desktop
            const zoomFactor = container.clientWidth < 768 ? 1.4 : 1.1;
            scale = scale * zoomFactor;
        }
        
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
            // Adjust this ratio to crop the bottom edge (e.g. ~2cm)
            const BOTTOM_CROP_RATIO = 0.08; 
            // Adjust this to shift the content vertically (Negative = Up, Positive = Down)
            const SHIFT_Y_RATIO = -0.02; // Shifts the image up by ~1cm from previous state

            if (num === 2) {
                // Show top portion
                wrapper.style.height = (cssHeight * CUT_RATIO) + 'px';
                canvas.style.marginTop = '0px';
                canvas.style.marginLeft = '0px';
                canvas.style.width = '100%';
                
                const page2Text = document.getElementById('page2-text');
                if (page2Text) page2Text.classList.remove('hidden');

                const contactInfo = document.getElementById('contact-info');
                if (contactInfo) contactInfo.style.backgroundColor = '#fff';
                const bowelHeading = document.getElementById('bowel-heading');
                if (bowelHeading) bowelHeading.classList.add('hidden');
                
                // Dynamically sample the background color from the PDF to match
                setTimeout(() => {
                    try {
                        // Sample near the top left to get the light blue background
                        const pixel = ctx.getImageData(10, 10, 1, 1).data;
                        const bgColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
                        container.style.backgroundColor = bgColor;
                        if (page2Text) page2Text.style.backgroundColor = bgColor;
                    } catch(e) {}
                }, 100);
            } else if (num === 16) {
                const page2Text = document.getElementById('page2-text');
                if (page2Text) page2Text.classList.add('hidden');
                
                const bowelHeading = document.getElementById('bowel-heading');
                if (bowelHeading) bowelHeading.classList.remove('hidden');

                const LOCAL_CUT = 0.78; // Deep cut to hide the original 3 lines of text completely
                // Show bottom portion but crop the bottom edge, and shift Y position
                wrapper.style.height = (cssHeight * (1 - LOCAL_CUT - BOTTOM_CROP_RATIO)) + 'px';
                canvas.style.marginTop = `-${cssHeight * LOCAL_CUT}px`;
                
                // Center the zoomed-in canvas horizontally to crop side margins
                const cssWidth = viewport.width / (window.devicePixelRatio || 1);
                canvas.style.width = cssWidth + 'px';
                
                const overflowX = cssWidth - container.clientWidth;
                if (overflowX > 0) {
                    canvas.style.marginLeft = `-${overflowX / 2}px`;
                } else {
                    canvas.style.marginLeft = '0px';
                }
                
                // Dynamically sample the background color from the PDF to blend seamlessly!
                setTimeout(() => {
                    try {
                        const sampleY = Math.floor(viewport.height * 0.93);
                        const sampleX = Math.floor(viewport.width * 0.1); // Sample near the left edge to avoid text/images
                        const pixel = ctx.getImageData(sampleX, sampleY, 1, 1).data;
                        const bgColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
                        container.style.backgroundColor = bgColor;
                        const contactInfo = document.getElementById('contact-info');
                        if (contactInfo) contactInfo.style.backgroundColor = bgColor;
                    } catch(e) {
                        console.error('Could not sample color', e);
                    }
                }, 100);
            } else {
                wrapper.style.height = cssHeight + 'px';
                canvas.style.marginTop = '0px';
                canvas.style.marginLeft = '0px';
                canvas.style.width = '100%';
                container.style.backgroundColor = '#fff';
                const contactInfo = document.getElementById('contact-info');
                if (contactInfo) contactInfo.style.backgroundColor = '#fff';
                const bowelHeading = document.getElementById('bowel-heading');
                if (bowelHeading) bowelHeading.classList.add('hidden');
                const page2Text = document.getElementById('page2-text');
                if (page2Text) page2Text.classList.add('hidden');
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
        fullOverlay.classList.remove('hidden');
        if (tapHintText) tapHintText.innerText = '화면을 터치하여 대변 양상 확인하기';
    } else if (pageObjNum === 16) {
        fullOverlay.classList.remove('hidden');
        if (tapHintText) tapHintText.innerText = '화면을 터치하면 처음으로 돌아갑니다';
        if (contactInfo) contactInfo.classList.remove('hidden');
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
