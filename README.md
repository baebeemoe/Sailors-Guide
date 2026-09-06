# Beemoe's Guide – Star Sailor's Edition

A beginner-friendly Star Sailors companion guide hosted with GitHub Pages.

## Project structure

```text
/
├── index.html
├── character.html
├── team-builder.html
├── memory-pieces.html
├── memory-piece.html
├── README.md
│
├── css/
│   ├── base.css
│   ├── retro-theme.css
│   ├── layout-fix.css
│   └── anime-glass-theme.css
│
├── js/
│   ├── main.js
│   ├── character.js
│   ├── team-builder.js
│   ├── memory-piece.js
│   └── memory-image-paths.js
│
├── data/
│   ├── game-data.js
│   └── memory-pieces.js
│
└── assets/
    ├── characters/
    ├── adventurers/
    ├── memory-pieces/
    ├── gear/
    ├── artifacts/
    ├── monsters/
    └── ui/
```

The HTML files remain in the repository root intentionally so the existing GitHub Pages URLs stay stable and simple. Styling, scripts, and databases are separated into dedicated folders for easier maintenance.

## Naming rules

Keep file names lowercase and use hyphens where possible.

Examples:

```text
assets/characters/heidi.jpg
assets/adventurers/paladin.jpg
assets/memory-pieces/traitor.png
assets/gear/example-gear.png
assets/artifacts/example-artifact.png
```

GitHub Pages paths are case-sensitive.

## GitHub Pages setup

Settings → Pages

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

If a recently updated page still shows an older cached version, use Ctrl + F5 or Ctrl + Shift + R.
