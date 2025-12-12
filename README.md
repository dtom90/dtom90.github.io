# David Thomason - Personal Website

A minimal React website built with Vite and deployed to GitHub Pages.

## Setup

1. Install dependencies:
```bash
bun install
```

2. Run development server:
```bash
bun run dev
```

3. Build for production:
```bash
bun run build
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when you push to the `main` branch. The workflow:
- Builds the React app
- Deploys to the `gh-pages` branch
- Uses the custom domain `davidthomason.com` (configured via `public/CNAME`)

## Project Structure

- `src/` - React source code
- `public/` - Static assets (images, CNAME file)
- `.github/workflows/` - GitHub Actions deployment workflow

