# GIFT Program Website

A modern, responsive website for GIFT (Global Institute For Transformation) showcasing sweet potato farming projects in Haiti, Malawi, and future locations.

## Overview

This website educates visitors about GIFT's mission to address global hunger and poverty through sustainable agriculture partnerships with churches worldwide. The site features project information, resources for farmers, impact metrics, and ways for donors and supporters to get involved.

## Features

- **Responsive Design**: Mobile-first design that works beautifully on all devices
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation, ARIA labels, and semantic HTML
- **Fast Loading**: Optimized performance with lazy loading images and minimal dependencies
- **Contact Form**: Fully functional contact form using FormSubmit.co (no backend required)
- **SEO Optimized**: Meta tags, semantic HTML, and proper heading structure for search engines
- **Modern UI**: Clean design with Tailwind CSS and smooth animations

## Technology Stack

- **HTML5**: Semantic markup for better SEO and accessibility
- **Tailwind CSS**: Via CDN for responsive styling (no build process required)
- **Vanilla JavaScript**: Interactive features without heavy frameworks
- **FormSubmit.co**: Free form backend service for contact forms
- **No Build Process**: Simple deployment with static files

## Site Structure

```
/
├── index.html                  # Homepage
├── why-sweet-potatoes.html     # Nutritional and economic benefits
├── our-approach.html           # Church twinning model and methodology
├── haiti.html                  # Haiti project details
├── malawi.html                 # Malawi project details
├── get-involved.html           # Partnership opportunities and contact form
├── resources.html              # Farming guides and recipes
├── impact.html                 # Impact metrics and transparency
├── css/
│   └── styles.css              # Custom styles
├── js/
│   └── main.js                 # Interactive features
├── images/                     # Image assets (add your photos here)
└── README.md                   # This file
```

## Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd GIFTProgramWebsite
   ```

2. Open in your browser:
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx serve

     # Using PHP
     php -S localhost:8000
     ```

3. View the site at `http://localhost:8000`

## Deployment

### Option 1: GitHub Pages (Recommended - Free)

1. Push your code to GitHub
2. Go to Repository Settings → Pages
3. Source: Deploy from a branch
4. Branch: Select `main` or `master` → `/root` → Save
5. Your site will be available at `https://yourusername.github.io/GIFTProgramWebsite/`

### Option 2: Netlify (Recommended - Free)

1. Create account at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to your Git repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
5. Click "Deploy site"
6. Site will be live with a Netlify URL (can add custom domain)

### Option 3: Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. No build configuration needed
5. Deploy

### Option 4: Traditional Web Hosting

1. Upload all files via FTP/SFTP to your web host
2. Ensure `index.html` is in the root directory
3. Site should work immediately (no server configuration needed)

## Updating Content

### Adding Images

1. Add images to the `images/` folder
2. Update image references in HTML:
   ```html
   <!-- Replace placeholder SVGs with actual images -->
   <img src="images/your-photo.jpg" alt="Description" loading="lazy">
   ```

3. Recommended image sizes:
   - Hero images: 1920x1080px
   - Project photos: 800x600px
   - Gallery images: 600x400px
   - Optimize images before uploading (use tools like TinyPNG)

### Updating Text Content

All content is in HTML files. To update:

1. Open the relevant HTML file in a text editor
2. Find the section you want to edit
3. Update the text between HTML tags
4. Save the file
5. Refresh your browser to see changes

**Example - Updating statistics on homepage:**

```html
<!-- Find this in index.html around line 130 -->
<div class="stat-number" data-value="10000" data-suffix="+">0+</div>
<div class="stat-label">Lives Impacted</div>

<!-- Update the data-value to change the number -->
<div class="stat-number" data-value="15000" data-suffix="+">0+</div>
<div class="stat-label">Lives Impacted</div>
```

### Adding New Project Locations

1. Copy `haiti.html` or `malawi.html` as a template
2. Rename to your new location (e.g., `kenya.html`)
3. Update all content specific to that location
4. Add navigation link in the header of all pages:
   ```html
   <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
       <a href="haiti.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Haiti Project</a>
       <a href="malawi.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Malawi Project</a>
       <a href="kenya.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Kenya Project</a>
   </div>
   ```

### Updating Contact Information

Update in the footer of all HTML files (around line 600 in each file):

```html
<h4 class="text-xl font-bold mb-4 text-white">Contact Us</h4>
<ul class="space-y-3 text-gray-400">
    <li><strong>Tim Maurer</strong><br>
        <a href="mailto:timothy.maurer@institutefortransformation.org" class="hover:text-orange-400">
            timothy.maurer@institutefortransformation.org
        </a>
    </li>
    <li><a href="tel:402-212-7973" class="hover:text-orange-400">402-212-7973</a></li>
</ul>
```

### Configuring the Contact Form

The contact form uses FormSubmit.co. To customize:

1. Open `get-involved.html`
2. Find the form (around line 200):
   ```html
   <form id="contact-form" action="https://formsubmit.co/timothy.maurer@institutefortransformation.org" method="POST">
   ```
3. Replace email with your destination email
4. Optional: Add FormSubmit features:
   ```html
   <input type="hidden" name="_next" value="https://yoursite.com/thank-you.html">
   <input type="hidden" name="_cc" value="another@email.com">
   ```

Full FormSubmit documentation: https://formsubmit.co/

## Customization

### Changing Colors

Update CSS variables in `css/styles.css`:

```css
:root {
  --primary-orange: #e67e22;    /* Main brand color */
  --dark-orange: #d35400;       /* Darker shade */
  --light-orange: #f39c12;      /* Lighter shade */
  --earth-brown: #8b5a3c;       /* Secondary color */
  --dark-green: #27ae60;        /* Accent color */
}
```

### Adding New Pages

1. Copy an existing HTML file as a template
2. Update the content
3. Add navigation links in the header of all pages
4. Add footer links if appropriate

### Adding Video Content

Replace video placeholders with actual YouTube/Vimeo embeds:

```html
<!-- Find video placeholders and replace with: -->
<div class="video-container">
    <iframe
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="Video Title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
```

## Adding Downloadable Resources

1. Create a `downloads/` folder
2. Add PDF files to this folder
3. Update links in `resources.html`:
   ```html
   <a href="downloads/sweet-potato-guide.pdf" class="btn-primary" download>
       Download PDF
   </a>
   ```

## Analytics

### Adding Google Analytics

Add before the closing `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Skip to main content link
- Sufficient color contrast
- Responsive text sizing
- Focus indicators
- Alt text on images (add to your images)

## Performance Optimization

- Lazy loading for images
- Minimal JavaScript
- CSS via CDN (cached)
- No build process overhead
- Optimized file structure

## Troubleshooting

### Images not displaying
- Check file paths are correct
- Ensure images are in the `images/` folder
- Verify image file extensions match HTML references

### Contact form not working
- Verify email address in form action
- Check FormSubmit.co documentation
- Ensure form has `method="POST"`
- Check browser console for errors

### Styling issues
- Clear browser cache
- Check that `css/styles.css` is linked correctly
- Verify Tailwind CSS CDN is loading

### JavaScript features not working
- Check browser console for errors
- Verify `js/main.js` is linked before closing `</body>` tag
- Ensure JavaScript is enabled in browser

## Maintenance

### Regular Updates

1. **Content Updates**: Monthly review of statistics, success stories, and project updates
2. **Image Updates**: Add new project photos as they become available
3. **Security**: Keep dependencies updated (though this site has minimal dependencies)
4. **Testing**: Test contact forms monthly to ensure they're working
5. **Analytics Review**: Check Google Analytics monthly for user engagement

### Backup

- Keep a local copy of all files
- Use Git for version control
- Regular commits after major updates
- Consider automated backups if using web hosting

## Support

For questions or issues:
- **Email**: timothy.maurer@institutefortransformation.org
- **Phone**: 402-212-7973
- **Main Website**: https://www.gifttransforms.org/

## License

© 2025 Global Institute For Transformation (GIFT). All rights reserved.

## Credits

- Design & Development: Claude Code
- Organization: Global Institute For Transformation (GIFT)
- Partners: St. Matthew Parish (Tolland, CT), Arpin Strong, Poznan Supercomputing Center

---

## Quick Reference: Common Tasks

### Update a Statistic
1. Open relevant HTML file
2. Find `<div class="stat-number" data-value="NUMBER">`
3. Change the `data-value` attribute
4. Save and refresh

### Add a New Photo
1. Add image to `images/` folder
2. Find placeholder SVG in HTML
3. Replace with: `<img src="images/your-photo.jpg" alt="Description" loading="lazy">`
4. Save and refresh

### Change Contact Email
1. Search all HTML files for the old email
2. Replace with new email
3. Update in both footer and contact form
4. Save all files

### Deploy to GitHub Pages
1. Commit changes: `git add . && git commit -m "Update content"`
2. Push to GitHub: `git push origin main`
3. Enable GitHub Pages in repository settings
4. Done!

---

Last updated: 2025-10-22
