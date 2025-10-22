# Quick Start Guide - Local Testing

## 🚀 Get Started in 3 Steps

### Step 1: Open in VS Code
1. Copy this entire folder to your desktop
2. Right-click the folder → "Open with Code" (or drag folder into VS Code)

### Step 2: Launch Local Server

**Option A: Using VS Code Live Server Extension (EASIEST)**
1. Install "Live Server" extension in VS Code (by Ritwick Dey)
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Website opens automatically in your browser! 🎉

**Option B: Using Terminal (Python - Already installed on most systems)**
```bash
# Open VS Code terminal (Terminal → New Terminal)
python -m http.server 8000

# Or if you have Python 3:
python3 -m http.server 8000
```
Then open: http://localhost:8000

**Option C: Using Node.js (if you have npm installed)**
```bash
# In VS Code terminal:
npm start
```
Then open: http://localhost:3000

**Option D: Using PHP (if you have PHP installed)**
```bash
# In VS Code terminal:
php -S localhost:8000
```
Then open: http://localhost:8000

### Step 3: Test the Website
1. Browse all pages using the navigation menu
2. Test the contact form on the "Get Involved" page
3. Check mobile responsiveness (resize browser window)
4. Test all links and buttons

## 📁 Folder Structure

```
GIFTProgramWebsite/
├── index.html              ← Start here!
├── why-sweet-potatoes.html
├── our-approach.html
├── haiti.html
├── malawi.html
├── get-involved.html
├── resources.html
├── impact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/                 ← Add your photos here
│   └── .gitkeep
├── README.md               ← Full documentation
└── QUICK_START.md          ← This file
```

## 🖼️ Adding Images

1. Add your photos to the `images/` folder
2. Update HTML files to reference your images:
   ```html
   <!-- Find placeholders like this: -->
   <svg>...</svg>

   <!-- Replace with: -->
   <img src="images/your-photo.jpg" alt="Description" loading="lazy">
   ```

## 🧪 Testing Checklist

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form displays properly
- [ ] Mobile view works (resize browser)
- [ ] All pages load without errors
- [ ] Footer links work
- [ ] Smooth scrolling works

## 🐛 Troubleshooting

**Problem**: Pages won't load
- **Solution**: Make sure you're using a local server (not just opening HTML files)

**Problem**: Styles look broken
- **Solution**: Check internet connection (Tailwind CSS loads from CDN)

**Problem**: Contact form doesn't work
- **Solution**: Form requires internet to submit. Test after deployment.

**Problem**: Images don't show
- **Solution**: Add actual images to the `images/` folder

## 📝 Making Changes

1. Edit HTML files in VS Code
2. Save your changes (Ctrl+S or Cmd+S)
3. Refresh browser to see updates
4. That's it! No build process needed.

## 🚀 Next Steps

Once testing looks good:
1. Add your real photos to `images/` folder
2. Update statistics and content
3. Deploy to GitHub Pages, Netlify, or Vercel
4. See README.md for deployment instructions

## 💡 Pro Tips

- Use VS Code's search (Ctrl+Shift+F) to find/replace text across all files
- Install "Prettier" extension to auto-format your HTML
- Use "Auto Rename Tag" extension for easier HTML editing
- Press F12 in browser to open DevTools and check for errors

---

Need help? Contact: timothy.maurer@institutefortransformation.org
