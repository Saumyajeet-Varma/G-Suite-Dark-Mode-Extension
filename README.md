# G-Suite Dark Mode

A sleek, lightweight Chrome Extension built with Manifest V3 to bring a unified Dark Mode experience to the entire Google Workspace ecosystem. Say goodbye to the "spreadsheet glare" and protect your eyes across Sheets, Docs, Gmail, and more.

---

## Features

- **One-Click Toggle**: Instantly switch between light and dark themes using the extension icon.
- **Intelligent Inversion**: Uses CSS filters and hue-rotation to darken backgrounds while keeping brand colors (Google Blue, Green, etc.) accurate.
- **Media Preservation**: Automatically detects and excludes images, videos, and charts from inversion so they remain high-fidelity.
- **Broad Coverage**: Works across the primary Google ecosystem:
  - [x] Google Sheets
  - [x] Google Docs
  - [x] Gmail
  - [x] Google Calendar 
  - [x] Google Drive
  - [x] Gemini AI

---

## Installation (Developer Mode)

#### Clone the Repo:
```bash
git clone https://github.com/Saumyajeet-Varma/g-suite-dark-mode.git
```
#### Open Chrome Extensions:
Go to `chrome://extensions/` in your browser.

#### Enable Developer Mode:
Toggle the **Developer mode** switch in the top right corner.

#### Load the Extension:
Click **Load unpacked** and select the root folder of this project.

#### Pin & Use:
Click the puzzle piece icon in your toolbar, pin **G-Suite Dark Mode**, and click it on any Google page!

---

## Directory Structure

```md
.
├── .gitignore
├── background.js
├── CONTRIBUTING.md
├── LICENSE
├── manifest.json
├── PRIVACY.md
└── README.md 
```
---

## Development

1. Open `background.js`.
2. Adjust the `filter: invert(0.9) hue-rotate(180deg)` values.
3. Go to `chrome://extensions/` and click the Reload icon on the extension card to see your changes.

---

## Contributing
Contributions are welcome! If you find a bug in how a specific Google app renders, feel free to open an Issue or submit a Pull Request.

---

## Privacy Policy
**G-Suite Dark Mode** respects your privacy.
- **No Data Collection:** The extension does not collect or store any personal data.
- **Local Execution:** All theme toggling happens locally on your machine.
- **No Tracking:** We do not use cookies or analytics.

--- 

## Author
Saumyajeet Varma • [GitHub](https://github.com/Saumyajeet-Varma)