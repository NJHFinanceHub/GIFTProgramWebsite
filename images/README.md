# Images Folder

Add your project photos here!

## Recommended Image Specifications

### Hero Images (Homepage, Page Headers)
- **Dimensions**: 1920 x 1080 pixels (16:9 ratio)
- **Format**: JPEG or PNG
- **File Size**: Keep under 500KB for fast loading
- **Examples**:
  - hero-home.jpg
  - hero-haiti.jpg
  - hero-malawi.jpg

### Project Photos (Content Sections)
- **Dimensions**: 800 x 600 pixels (4:3 ratio)
- **Format**: JPEG or PNG
- **File Size**: Keep under 200KB
- **Examples**:
  - farming-haiti-1.jpg
  - farmers-training.jpg
  - harvest-malawi.jpg

### Gallery Images
- **Dimensions**: 600 x 400 pixels
- **Format**: JPEG or PNG
- **File Size**: Keep under 150KB
- **Examples**:
  - gallery-1.jpg
  - gallery-2.jpg
  - gallery-3.jpg

### Icons/Logos (if needed)
- **Format**: PNG or SVG (SVG preferred for logos)
- **Background**: Transparent
- **Examples**:
  - logo.png
  - partner-logo.png

## Image Optimization Tools

Before adding images, optimize them for web:

**Free Online Tools:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- Compressor.io: https://compressor.io/

**Desktop Tools:**
- ImageOptim (Mac): https://imageoptim.com/
- RIOT (Windows): https://riot-optimizer.com/

## Naming Convention

Use descriptive, lowercase names with hyphens:
- ✅ Good: `sweet-potato-harvest.jpg`
- ❌ Bad: `IMG_1234.jpg`

## Quick Replace Guide

### Replace Homepage Hero Background
```html
<!-- In index.html, find: -->
<section class="hero flex items-center">

<!-- Add background image: -->
<section class="hero flex items-center" style="background-image: url('images/hero-home.jpg');">
```

### Replace Project Photos
```html
<!-- Find placeholder SVG sections like: -->
<div class="bg-orange-200 h-64 rounded-lg flex items-center justify-center">
    <svg>...</svg>
</div>

<!-- Replace entire div with: -->
<img src="images/your-photo.jpg" alt="Description of photo" class="w-full h-64 object-cover rounded-lg" loading="lazy">
```

### Replace Gallery Placeholders
```html
<!-- Find: -->
<div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
    <svg>...</svg>
</div>

<!-- Replace with: -->
<img src="images/gallery-1.jpg" alt="Photo description" class="w-full h-64 object-cover rounded-lg" loading="lazy">
```

## Sample Images Needed

For a complete website, you'll want:

### Homepage (index.html)
- [ ] Hero background image
- [ ] Project overview image
- [ ] Community/farmers photo

### Why Sweet Potatoes (why-sweet-potatoes.html)
- [ ] Sweet potato roots photo
- [ ] Sweet potato leaves photo
- [ ] Nutrition/farming image

### Haiti Project (haiti.html)
- [ ] Haiti project location photo
- [ ] Farmers working
- [ ] Community gathering
- [ ] 6 gallery images

### Malawi Project (malawi.html)
- [ ] Malawi project location photo
- [ ] Technology in use (sensors/webcams)
- [ ] Farmers with harvest
- [ ] 6 gallery images

### Resources (resources.html)
- [ ] Recipe photos (optional)
- [ ] Farming technique photos (optional)

### Impact (impact.html)
- [ ] Before/after photos (optional)
- [ ] Community success photos (optional)

---

**Remember**: Always optimize images before uploading to ensure fast page load times!
