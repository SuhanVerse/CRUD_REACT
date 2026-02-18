# 🚀 Quick Deployment Guide

## One-Time Setup

### 1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

### 2. Configure vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // For custom domain
})
```

### 3. Add scripts to package.json
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4. Create public/CNAME (for custom domain)
```
react.suhankhadka.com.np
```

### 5. Set Up GitHub Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic) with `repo` scope
3. Copy the token

### 6. Configure Git credentials
```bash
git config --global credential.helper store
```

## Deploy Every Time You Make Changes

```bash
npm run deploy
```

Enter your token when prompted for password.

## Verify Deployment

1. Go to your GitHub repo → Settings → Pages
2. Make sure source is set to `gh-pages` branch
3. Wait 1-2 minutes
4. Visit your site!

## Quick Fixes

### Blank page?
Check `base` in vite.config.js - should be `/` for custom domain

### Auth failed?
Use Personal Access Token, not your GitHub password

### Changes not showing?
```bash
rm -rf dist
npm run deploy
```
Then hard refresh your browser (Ctrl+Shift+R)
