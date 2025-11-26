# Deployment Guide - Divine Food

This guide will help you deploy Divine Food to Vercel (recommended) or Netlify.

## Prerequisites

- GitHub account
- Vercel or Netlify account (free tier is fine)
- Your WhatsApp Business number

---

## Option 1: Deploy to Vercel (Recommended) ⚡

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit: Divine Food website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/divine-food.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project

### Step 3: Configure Environment Variables

Before deploying, add your environment variable:

1. In the Vercel import screen, scroll to "Environment Variables"
2. Add:
   - **Name**: `VITE_WHATSAPP_NUMBER`
   - **Value**: Your WhatsApp number (e.g., `+27821234567`)
3. Click "Add"

### Step 4: Deploy!

1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at `https://your-project.vercel.app`

### Step 5: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `divinefood.co.za`)
4. Follow the instructions to update your DNS records

### Updating Your Site

Every time you push to GitHub, Vercel automatically rebuilds and deploys:

```bash
git add .
git commit -m "Update menu items"
git push
```

---

## Option 2: Deploy to Netlify 🌐

### Step 1: Build Your Site

```bash
npm run build
```

This creates a `dist` folder.

### Step 2: Deploy to Netlify

**Option A: Drag & Drop (Easiest)**

1. Go to [netlify.com](https://netlify.com)
2. Drag your `dist` folder onto the deploy dropzone
3. Wait for deployment to complete

**Option B: GitHub Integration**

1. Push code to GitHub (see Vercel Step 1 above)
2. Go to Netlify → "Add new site" → "Import from Git"
3. Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

### Step 3: Add Environment Variables

1. Go to Site Settings → Environment Variables
2. Click "Add a variable"
3. Add:
   - **Key**: `VITE_WHATSAPP_NUMBER`
   - **Value**: Your WhatsApp number
4. Click "Save"
5. Trigger a redeploy from the Deploys tab

### Step 4: Custom Domain (Optional)

1. Go to Domain Settings
2. Click "Add custom domain"
3. Follow instructions to update DNS

---

## Testing Your Deployment

1. Visit your deployed site
2. Browse the menu
3. Add items to cart
4. Go through checkout
5. Click "Send Order via WhatsApp"
6. Verify the WhatsApp message is correct
7. Test on mobile devices!

---

## Troubleshooting

### WhatsApp link not working on deployment

**Problem**: WhatsApp opens but no message appears

**Solution**: 
- Check that `VITE_WHATSAPP_NUMBER` is set in environment variables
- Make sure to include country code with + (e.g., `+27123456789`)
- Redeploy after adding environment variables

### Build fails

**Problem**: Deployment fails during build

**Solution**:
- Check for TypeScript errors: `npm run build` locally
- Ensure all imports are correct
- Check that `package.json` has all dependencies

### Images not loading

**Problem**: Product images don't appear

**Solution**:
- If using Unsplash URLs, ensure they're valid
- If using local images, ensure they're in `/public/images/`
- Check browser console for CORS errors

### 404 on page refresh

**Problem**: Refreshing any page except home shows 404

**Solution** (Vercel):
- Create `vercel.json` in root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Solution** (Netlify):
- Create `public/_redirects`:
```
/*    /index.html   200
```

---

## Performance Tips

### 1. Optimize Images

Before deploying, optimize product images:
- Compress images (use tinypng.com)
- Resize to max 1200px width
- Use WebP format when possible

### 2. Enable Caching

Both Vercel and Netlify automatically enable caching. No action needed!

### 3. Monitor Performance

- Use Google PageSpeed Insights
- Test on real mobile devices
- Check loading times from different locations

---

## Security Best Practices

1. **Never commit `.env` file**
   - It's in `.gitignore` by default
   - Always use platform environment variables

2. **WhatsApp Number**
   - Your number will be visible in the frontend code
   - This is normal for WhatsApp links
   - Use a business number, not personal

3. **Rate Limiting**
   - Consider adding rate limiting to prevent spam
   - WhatsApp has built-in spam protection

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Get your GA4 tracking ID
2. Add to `index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Monitor Errors

Both Vercel and Netlify have built-in analytics:
- Vercel: Analytics tab in your project
- Netlify: Analytics section in site settings

---

## Maintenance

### Updating Menu Items

1. Edit `/data/products.json`
2. Commit and push:
```bash
git add data/products.json
git commit -m "Updated menu items"
git push
```
3. Site automatically rebuilds

### Updating Prices

Same as above - just edit the JSON file and push.

### Changing Design

1. Edit components or styles
2. Test locally: `npm run dev`
3. Push to GitHub
4. Automatic deployment

---

## Support

If you encounter issues:

1. Check the main README.md
2. Check SETUP.md for configuration issues
3. Check Vercel/Netlify build logs
4. Search for error messages online

---

## Checklist Before Going Live ✅

- [ ] Environment variables set correctly
- [ ] All product images loading
- [ ] WhatsApp link tested and working
- [ ] Mobile responsive on real devices
- [ ] All pages accessible (Home, Menu, About, Contact, etc.)
- [ ] Cart persists across page refreshes
- [ ] Custom domain configured (if applicable)
- [ ] Social media links updated (if applicable)
- [ ] Contact information correct
- [ ] Tested checkout flow end-to-end

---

**Congratulations!** 🎉 Your Divine Food website is now live!
