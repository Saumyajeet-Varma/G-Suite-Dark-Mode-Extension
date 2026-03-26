let isDark = false;

chrome.action.onClicked.addListener((tab) => {

    isDark = !isDark;

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: toggleDarkMode,
        args: [isDark]
    });
});

function toggleDarkMode(enable) {

    const id = "sheets-dark-theme-style";
    let style = document.getElementById(id);

    if (enable) {
        if (!style) {

            style = document.createElement("style");
            style.id = id;

            // style.textContent = `
            //     html, body, .docs-ui-unauth-container {
            //         filter: invert(0.9) hue-rotate(180deg) !important;
            //         background: #111 !important;
            //     }
            //
            //     img, canvas, .docs-sheet-container-canvas {
            //         filter: invert(1) hue-rotate(180deg) !important;
            //     }
            // `;

            style.textContent = `
                html { 
                    filter: invert(0.9) hue-rotate(180deg) !important; 
                    background: #111 !important;
                }

                img, video, iframe, canvas, 
                .docs-sheet-container-canvas, 
                .punch-full-screen-element,
                [style*="background-image"] { 
                    filter: invert(1) hue-rotate(180deg) !important; 
                }

                .gb_ia, .docs-cursor { 
                    filter: invert(1) hue-rotate(180deg) !important; 
                }
            `;

            document.head.appendChild(style);
        }
    }
    else {
        if (style) {
            style.remove();
        }
    }
}