# GIFT Website Testing Checklist

## Navigation Testing

### Desktop Navigation
Test on each page to ensure both dropdowns work correctly:

- [ ] **Home** (`index.html`)
  - [ ] "Our Partners" dropdown shows all 7 partners organized by country
  - [ ] "Projects" dropdown shows all 5 projects
  - [ ] All links navigate correctly

- [ ] **Why Sweet Potatoes** (`why-sweet-potatoes.html`)
  - [ ] Navigation matches home page
  - [ ] Dropdowns don't interfere with each other

- [ ] **Our Approach** (`our-approach.html`)
  - [ ] Both dropdowns present and functional

- [ ] **Resources** (`resources.html`)
  - [ ] Fixed navigation (was showing "Projects" instead of "Our Partners")
  - [ ] Both dropdowns now visible

- [ ] **Impact** (`impact.html`)
  - [ ] Navigation consistent

- [ ] **Get Involved** (`get-involved.html`)
  - [ ] Navigation consistent

### Partner Pages
All 7 partner pages should have identical navigation:

- [ ] Maison L'Arc-en-Ciel (`larc-en-ciel-haiti.html`)
- [ ] Wynne Farm (`wynne-farm-haiti.html`)
- [ ] University of Fondwa (`university-fondwa-haiti.html`)
- [ ] Second Mile Haiti (`second-mile-haiti.html`)
- [ ] Smallholder Farmers Alliance (`sfa-haiti.html`)
- [ ] Daughters of Wisdom (`daughters-of-wisdom-malawi.html`)
- [ ] Ecogenesis (`ecogenesis-philippines.html`)

### Mobile Navigation
Test on mobile devices or browser dev tools (width < 768px):

- [ ] Hamburger menu appears
- [ ] Menu opens when clicked
- [ ] All partners listed under "Our Partners:" section
- [ ] All projects listed under "Projects:" section
- [ ] Links work on mobile

---

## Link Testing

### Partner Page Links
From any page, click each partner link and verify:

- [ ] **Maison L'Arc-en-Ciel** - Loads correctly, weather widget works
- [ ] **Wynne Farm** - Loads correctly, weather widget works
- [ ] **University of Fondwa** - Loads correctly, weather widget works
- [ ] **Second Mile Haiti** - Loads correctly, weather widget works
- [ ] **Smallholder Farmers Alliance** - Loads correctly, weather widget works
- [ ] **Daughters of Wisdom** - Loads correctly, weather widget works (Malawi)
- [ ] **Ecogenesis** - Loads correctly, weather widget works (Philippines)

### Project Page Links
**NOTE:** Project pages need to be created. These will show 404 errors until created:

- [ ] Sweet Potato Smart Farming (`project-sweet-potato.html`) - TO BE CREATED
- [ ] Spiritual Ministry (`project-spiritual-ministry.html`) - TO BE CREATED
- [ ] Vocational Training (`project-vocational-training.html`) - TO BE CREATED
- [ ] Solar Energy Projects (`project-solar-energy.html`) - TO BE CREATED
- [ ] Rabbit Farming (`project-rabbit-farming.html`) - TO BE CREATED

### Footer Links
Test footer links on multiple pages:

- [ ] Partner links in footer work
- [ ] Contact email link opens email client
- [ ] Phone link works on mobile
- [ ] External link to gifttransforms.org opens in new tab

---

## Weather Widget Testing

Each partner page should have a working weather widget:

- [ ] **Haiti partners** - Show Port-au-Prince or local Haiti weather
- [ ] **Malawi partner** - Shows Lilongwe/Malawi weather
- [ ] **Philippines partner** - Shows Philippines weather
- [ ] Widgets load within 3-5 seconds
- [ ] Widgets show current temperature and conditions

---

## Cross-Browser Testing

Test the site in multiple browsers:

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## Pages Still Need Navigation Updates

The following pages may still have old navigation and need manual updates:

1. [ ] `why-sweet-potatoes.html`
2. [ ] `our-approach.html`
3. [ ] `impact.html`
4. [ ] `get-involved.html`
5. [ ] `haiti.html` (old country page - may want to redirect or update)
6. [ ] `malawi.html` (old country page - may want to redirect or update)

Use `NAVIGATION-TEMPLATE.html` as reference for the correct navigation code.

---

## Known Issues to Fix

1. **Project pages don't exist yet** - Need to create 5 project pages
2. **Old haiti.html and malawi.html pages** - Should these redirect to partner pages?
3. **Mobile menu JavaScript** - Verify hamburger menu toggle works
4. **Dropdown z-index** - Ensure dropdowns appear above other content (added z-50)

---

## Files Created

### Partner Pages (Complete)
- ✅ `larc-en-ciel-haiti.html`
- ✅ `wynne-farm-haiti.html`
- ✅ `university-fondwa-haiti.html`
- ✅ `second-mile-haiti.html`
- ✅ `sfa-haiti.html`
- ✅ `daughters-of-wisdom-malawi.html`
- ✅ `ecogenesis-philippines.html`

### Project Pages (To Be Created)
- ⏳ `project-sweet-potato.html`
- ⏳ `project-spiritual-ministry.html`
- ⏳ `project-vocational-training.html`
- ⏳ `project-solar-energy.html`
- ⏳ `project-rabbit-farming.html`

### Documentation
- ✅ `README-PARTNERS.md` - Partner pages documentation
- ✅ `NAVIGATION-TEMPLATE.html` - Standard navigation code
- ✅ `TESTING-CHECKLIST.md` - This file
- ✅ `update_navigation.py` - Script to batch update navigation

---

## Next Steps

1. **Complete navigation updates** on all remaining pages
2. **Create 5 project pages** with cross-links to relevant partners
3. **Test all links** systematically
4. **Add YouTube videos** to partner pages
5. **Add real photos** to replace placeholders
6. **Test on mobile devices**
7. **Add enhanced weather modules** (rainfall data, etc.)
