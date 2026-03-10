# Contributing to G-Suite Dark Mode

First off, thank you for considering contributing! It’s people like you who make open-source tools better for everyone.

## How Can I Contribute?

### Reporting Bugs
If you find a Google app where the dark mode looks "broken" (e.g., text is unreadable or a button disappears), please open an **Issue**:
1. Check if the issue already exists.
2. If not, open a new one and include:
    - Which Google app you were using (Sheets, Docs, etc.).
    - A screenshot of the visual glitch.
    - Your browser version.

### Suggesting Enhancements
Want to add support for Google Maps or Google Meet?
- Open an **Issue** with the tag `enhancement`.
- Describe how the current filter affects that specific site and what CSS tweaks might be needed.

### Pull Requests (PRs)
1. **Fork** the repository.
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`).
3. Make your changes in **IntelliJ IDEA**.
4. Test the extension by "Reloading" it in `chrome://extensions/`.
5. **Commit** your changes (`git commit -m 'Add support for Google Maps'`).
6. **Push** to the branch (`git push origin feature/AmazingFeature`).
7. Open a **Pull Request**.

## Style Guidelines
- **Keep it Lightweight:** Avoid adding heavy libraries. Plain JavaScript and CSS filters are preferred.
- **Maintain Inversion Logic:** Ensure that any new CSS doesn't accidentally invert images or user avatars.
- **Manifest V3:** All updates must comply with Chrome's Manifest V3 standards.

## License
By contributing, you agree that your contributions will be licensed under the project's **MIT License**.