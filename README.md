# 🍔 BurgerMan Porur - Website

A modern, animated static website for BurgerMan restaurant in Porur, Chennai.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Modern CSS animations and transitions
- **Hero Section** - Eye-catching landing section with gradient backgrounds
- **Information Cards** - Display ratings, location, hours, and pricing
- **Quick Actions** - Call, Order Online, and Reserve Table buttons
- **Menu Section** - Showcase burger offerings with descriptions
- **Services** - Highlight Dine-in, Takeaway, and Delivery options
- **About Section** - Tell your story and list key features
- **Contact Information** - Full location details and contact options
- **Accessibility** - Keyboard navigation and semantic HTML
- **Performance** - Lightweight and fast-loading

## 📁 File Structure

```
burger/
├── index.html          # Main HTML file
├── style.css          # All styling and animations
├── script.js          # Interactive features and animations
├── assets/
│   └── logo.png       # Restaurant logo
└── README.md          # This file
```

## 🎨 Customization Guide

### Update Restaurant Info
Edit the following in `index.html`:

1. **Logo**: Replace `assets/logo.png` with your logo
2. **Phone**: Change `063822 20474` to your phone number
3. **Address**: Update the full address in the Contact section
4. **Hours**: Modify opening/closing times
5. **Website**: Update `stores.burgerman.in` to your website
6. **Location**: Update coordinates in `openMaps()` function in `script.js`

### Menu Customization
In `index.html`, modify the menu items in the Menu Section:
- Change burger names, descriptions, and prices
- Add or remove menu items by copying the menu-item div

### Colors
Edit color variables in `style.css`:
```css
:root {
    --primary-color: #f97316;      /* Orange */
    --secondary-color: #ea580c;    /* Dark Orange */
    --dark-color: #1f2937;         /* Dark */
    --light-color: #f9fafb;        /* Light */
}
```

### Animations Speed
Modify animation durations in `style.css`:
- `animation: slideUp 0.8s ease-out;` - Change `0.8s` to your preferred duration

## 🖼️ Adding Images

To add burger images instead of colored gradients:

1. Save burger images in `assets/` folder
2. In `style.css`, modify `.item-image` in menu items:
```css
.menu-item:nth-child(1) .item-image {
    background-image: url('assets/burger1.jpg');
}
```

## 📱 How to Use

### Local Testing
1. Open the folder in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. Or simply open `index.html` in any web browser

### Deployment
1. Push all files to GitHub/GitLab
2. Use GitHub Pages to deploy:
   - Go to Settings → Pages
   - Select main branch
   - Your site will be available at `https://yourusername.github.io/burger`

3. Or use other hosting services:
   - Netlify (drag and drop)
   - Vercel
   - Firebase Hosting
   - AWS S3

## 🎯 SEO Optimization

To improve search visibility:

1. Add meta description in `index.html`:
```html
<meta name="description" content="BurgerMan Porur - Best burgers in Chennai">
```

2. Add keywords:
```html
<meta name="keywords" content="burgers, Chennai, Porur, restaurant">
```

3. Add Open Graph tags for social sharing:
```html
<meta property="og:title" content="BurgerMan Porur">
<meta property="og:image" content="assets/logo.png">
```

## 📊 Analytics

Add Google Analytics by including this in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🎬 Animation Customization

### Disable specific animations
In `script.js`, comment out the observer code to disable scroll animations

### Modify button ripple effect
Edit the ripple animation in `script.js` under the button click handler

## 📞 Contact Integration

### WhatsApp Integration
Replace phone button href:
```html
<a href="https://wa.me/919876543210?text=Hello%20BurgerMan" class="action-btn phone-btn">
```

### Google Forms for Reservations
Add a form link instead of alert in the Reserve button onclick

## ⚙️ Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Tips

1. Optimize images using TinyPNG or similar tools
2. Use lazy loading for images if you add many
3. Minify CSS and JavaScript for production
4. Use a CDN for faster content delivery

## 🔐 Security

- This is a static site with no backend
- To add contact forms, use services like:
  - Formspree
  - Basin
  - Netlify Forms
  - EmailJS

## 🎓 Learning Resources

- CSS Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
- Responsive Design: https://web.dev/responsive-web-design-basics/
- Accessibility: https://www.w3.org/WAI/fundamentals/

## 📄 License

Free to use and modify for your business

## 🚀 Next Steps

1. Customize colors and branding
2. Add your restaurant's menu items
3. Upload high-quality burger images
4. Deploy to a hosting service
5. Share with customers!

---

**Happy Selling! 🍔**

For updates or modifications, contact your web developer or visit the file directly.
