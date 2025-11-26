# Divine Food - Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure WhatsApp Number

1. Copy the environment file:
```bash
cp .env.example .env
```

2. Open `.env` and update your WhatsApp number:
```env
VITE_WHATSAPP_NUMBER=+27821234567
```

**Important**: Include the country code (e.g., +27 for South Africa)

## Step 3: Customize Your Menu

Edit `/data/products.json` to add your dishes:

```json
{
  "id": "your-dish-id",
  "name": "Dish Name",
  "price": 89,
  "description": "A delicious description",
  "image": "https://images.unsplash.com/photo-xxxxx?w=800",
  "category": "mains"
}
```

### Product Image Options:

**Option A: Use Unsplash URLs** (easy, free stock photos)
- Visit unsplash.com
- Find food images
- Right-click → Copy Image Address
- Use the URL in your product

**Option B: Use your own images**
1. Place images in `/public/images/`
2. Reference as: `"/images/your-photo.jpg"`

## Step 4: Customize Branding

### Colors
Edit `/styles/globals.css`:
```css
:root {
  --divine-brown: #3b2f2f;
  --divine-cream: #f6efe9;
  --divine-olive: #6b7a4f;
}
```

### Business Info
Update in these files:
- `/components/Footer.tsx` - Copyright and social links
- `/pages/ContactPage.tsx` - Email, location, hours
- `/pages/AboutPage.tsx` - Your story

## Step 5: Run Development Server

```bash
npm run dev
```

Visit: http://localhost:5173

## Step 6: Test WhatsApp Integration

1. Add products to cart
2. Go to checkout
3. Fill in the form
4. Click "Send Order via WhatsApp"
5. Verify the message looks correct
6. Send to yourself to test

## Step 7: Build for Production

```bash
npm run build
```

This creates a `dist` folder ready for deployment.

## Deploy to Vercel

1. Push code to GitHub
2. Go to vercel.com → New Project
3. Import your repository
4. Add environment variable:
   - **Name**: `VITE_WHATSAPP_NUMBER`
   - **Value**: Your WhatsApp number
5. Click Deploy!

## Deploy to Netlify

1. Run `npm run build`
2. Drag `dist` folder to Netlify
3. Go to Site Settings → Environment Variables
4. Add `VITE_WHATSAPP_NUMBER`

## Troubleshooting

### WhatsApp link not working?
- Make sure number includes country code (+27...)
- No spaces or special characters except +
- Test the number by sending yourself a regular WhatsApp message first

### Products not showing?
- Check `/data/products.json` syntax (valid JSON)
- Ensure image URLs are accessible
- Check browser console for errors

### Styling looks broken?
- Clear browser cache
- Run `npm install` again
- Check that TailwindCSS is compiling (look for console errors)

### Cart not persisting?
- Check browser localStorage is enabled
- Try a different browser
- Clear site data and try again

## Need Help?

Check the main README.md for detailed documentation.

---

**Ready to go live?** 🚀 Follow the deployment steps above!
