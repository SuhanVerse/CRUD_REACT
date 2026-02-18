# ✅ Deployment Checklist

Use this checklist before deploying to ensure everything is set up correctly.

## Pre-Deployment Checklist

### 1. Code & Build
- [ ] All features tested locally with `npm run dev`
- [ ] No console errors in browser DevTools
- [ ] Production build works: `npm run build && npm run preview`
- [ ] All changes committed to Git
- [ ] Code pushed to GitHub repository

### 2. Vite Configuration
- [ ] `vite.config.js` exists in root directory
- [ ] `base` path configured correctly:
  - [ ] `base: '/'` for custom domain
  - [ ] `base: '/REPO_NAME/'` for GitHub subdomain
- [ ] Build output set to `dist` folder

### 3. Package Configuration
- [ ] `gh-pages` installed: `npm install --save-dev gh-pages`
- [ ] Deploy scripts added to `package.json`:
  ```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  ```

### 4. Custom Domain Setup (if applicable)
- [ ] `public/CNAME` file created with your domain
- [ ] DNS records configured at domain registrar:
  - [ ] A records pointing to GitHub IPs
  - [ ] CNAME record (if using subdomain)
- [ ] Domain verified in GitHub repo settings

### 5. GitHub Configuration
- [ ] Personal Access Token (classic) generated with `repo` scope
- [ ] Token saved securely (password manager)
- [ ] Git credential helper configured: `git config --global credential.helper store`

### 6. Repository Settings
- [ ] Repository is public (or Enterprise if using private)
- [ ] GitHub Pages enabled in Settings → Pages
- [ ] Source set to `gh-pages` branch (after first deploy)

## Deployment Steps

### First-Time Deployment

```bash
# 1. Clean any previous builds
rm -rf dist

# 2. Deploy (will prompt for credentials)
npm run deploy

# 3. When prompted:
#    Username: YourGitHubUsername
#    Password: <paste your Personal Access Token>

# 4. Wait for success message
# ✓ Published

# 5. Configure GitHub Pages
# Go to repo Settings → Pages
# Set source to: gh-pages branch / (root)
```

### Subsequent Deployments

```bash
# Simply run (credentials cached)
npm run deploy
```

## Post-Deployment Verification

### Immediate Checks (1-2 minutes after deploy)
- [ ] Visit your deployed URL
- [ ] Check if page loads (not 404)
- [ ] Test all CRUD operations
- [ ] Verify localStorage persists data
- [ ] Test on mobile view (responsive design)
- [ ] Check browser console for errors

### GitHub Checks
- [ ] `gh-pages` branch exists in repository
- [ ] `gh-pages` branch contains `index.html` and `assets/` folder
- [ ] Latest commit shows your recent changes
- [ ] GitHub Pages shows "Your site is published at..."

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

## Troubleshooting Checklist

### Blank Page Issues
- [ ] Check `base` in `vite.config.js` matches deployment type
- [ ] Verify `gh-pages` branch has built files (not source code)
- [ ] Hard refresh browser: `Ctrl + Shift + R`
- [ ] Check browser console for 404 errors on JS/CSS files

### Authentication Issues
- [ ] Using Personal Access Token (not password)
- [ ] Token has `repo` scope enabled
- [ ] Token hasn't expired
- [ ] Git credential helper configured

### Custom Domain Issues
- [ ] `CNAME` file exists in `public/` folder
- [ ] DNS records properly configured
- [ ] DNS propagation complete (can take 24-48 hours)
- [ ] HTTPS enforced in GitHub Pages settings

### Changes Not Appearing
- [ ] Wait 2-3 minutes for GitHub Pages to rebuild
- [ ] Hard refresh browser
- [ ] Clear browser cache
- [ ] Check if `gh-pages` branch was actually updated
- [ ] Verify latest commit matches your changes

## Emergency Rollback

If something breaks:

```bash
# 1. Find working commit hash
git log --oneline

# 2. Reset to working version
git reset --hard <commit-hash>

# 3. Force push
git push origin main --force

# 4. Redeploy
npm run deploy
```

## Success Indicators

✅ Deployment successful when:
- GitHub shows "Your site is published"
- URL loads without 404 error
- All app features work correctly
- Mobile responsive design intact
- localStorage persists across refreshes
- No console errors

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Deployment
npm run deploy           # Deploy to GitHub Pages

# Clean rebuild
rm -rf dist && npm run build && npm run deploy

# Check deployed version
# Visit: https://yourusername.github.io/REPO_NAME/
# or your custom domain
```

## Need Help?

- Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed guide
- Review [README.md](README.md) for full documentation
- Create an issue on GitHub
- Check existing issues for similar problems

---

**Remember:** After first successful deploy, subsequent deploys are just `npm run deploy`! 🚀
