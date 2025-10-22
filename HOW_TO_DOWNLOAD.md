# How to Download This Website to Your Desktop

## 📥 Download from GitHub (Recommended)

### Option 1: Download ZIP File (Easiest)

1. Go to your GitHub repository:
   ```
   https://github.com/NJHFinanceHub/GIFTProgramWebsite
   ```

2. Click the green **"Code"** button

3. Click **"Download ZIP"**

4. Extract the ZIP file to your Desktop

5. Rename the extracted folder to `GIFTProgramWebsite`

6. Done! Open the folder in VS Code

### Option 2: Clone with Git (If you have Git installed)

1. Open Terminal (Mac/Linux) or Command Prompt (Windows)

2. Navigate to your Desktop:
   ```bash
   cd ~/Desktop
   # or on Windows:
   cd %USERPROFILE%\Desktop
   ```

3. Clone the repository:
   ```bash
   git clone https://github.com/NJHFinanceHub/GIFTProgramWebsite.git
   ```

4. Done! The folder is now on your Desktop

## 🚀 Launch the Website Locally

### Step 1: Open in VS Code

1. Right-click the `GIFTProgramWebsite` folder on your Desktop
2. Select **"Open with Code"**
   - If you don't see this option, drag the folder into VS Code

### Step 2: Install Live Server Extension (One-time setup)

1. In VS Code, click the Extensions icon (or press `Ctrl+Shift+X`)
2. Search for **"Live Server"** by Ritwick Dey
3. Click **"Install"**

### Step 3: Launch the Website

1. In VS Code, right-click on `index.html`
2. Select **"Open with Live Server"**
3. Your website opens automatically in your default browser! 🎉

**Alternative**: If you don't want to use Live Server, see `QUICK_START.md` for other options

## 📝 File Structure You'll See

```
GIFTProgramWebsite/
│
├── 📄 START_HERE.txt          ← Read this first!
├── 📄 QUICK_START.md          ← Detailed testing guide
├── 📄 README.md               ← Full documentation
│
├── 🌐 index.html              ← Homepage
├── 🌐 why-sweet-potatoes.html
├── 🌐 our-approach.html
├── 🌐 haiti.html
├── 🌐 malawi.html
├── 🌐 get-involved.html
├── 🌐 resources.html
├── 🌐 impact.html
│
├── 📁 css/
│   └── styles.css
│
├── 📁 js/
│   └── main.js
│
├── 📁 images/                 ← Add your photos here!
│   ├── README.md              ← Image guide
│   └── .gitkeep
│
├── 📄 package.json
└── 📄 .gitignore
```

## ✅ Quick Test Checklist

Once you have it running locally:

- [ ] Homepage loads correctly
- [ ] All navigation menu links work
- [ ] Click through all 8 pages
- [ ] Resize browser window (test mobile view)
- [ ] Check contact form on "Get Involved" page
- [ ] Scroll to test animations

## 🖼️ Next Steps

1. **Add Your Images**
   - Copy your photos to the `images/` folder
   - See `images/README.md` for specifications

2. **Update Content**
   - Edit HTML files to update text, statistics, etc.
   - Save and refresh browser to see changes

3. **Deploy**
   - See `README.md` for deployment instructions
   - Options: GitHub Pages, Netlify, or Vercel

## 🆘 Troubleshooting

**Q: I don't see "Open with Code" option**
- A: Open VS Code first, then drag the folder into it

**Q: Website looks broken/unstyled**
- A: Make sure you have internet connection (Tailwind CSS loads from CDN)

**Q: Live Server doesn't work**
- A: Use alternative method in QUICK_START.md (Python server)

**Q: Images don't show**
- A: Add actual images to the `images/` folder

## 📞 Need Help?

- **Email**: timothy.maurer@institutefortransformation.org
- **Phone**: 402-212-7973

---

**You're all set!** Open `START_HERE.txt` in your downloaded folder for quick instructions.
