# Divine Food - Premium Glassmorphic Food Ordering Website

A modern, mobile-first food ordering website built with React, TypeScript, TailwindCSS, and Framer Motion. Features a beautiful glassmorphic design and WhatsApp checkout integration.

## 🌟 Features

- **Premium Glassmorphic UI**: Stunning frosted glass effects with soft shadows and transparency
- **Mobile-First & Responsive**: Optimized for all devices
- **WhatsApp Checkout**: No payment gateway needed - orders are sent via WhatsApp
- **Shopping Cart**: Full-featured cart with Zustand state management
- **Product Categories**: Browse by category with search and filter functionality
- **Smooth Animations**: Beautiful page transitions and interactions with Motion (Framer Motion)
- **Product Details**: Detailed product pages with image galleries
- **Complete Pages**: Home, Menu, Product Details, Cart, Checkout, About, Contact

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- A WhatsApp Business number or personal number

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Edit `.env` and add your WhatsApp number:
```env
VITE_WHATSAPP_NUMBER=+27821234567
```
(Replace with your actual WhatsApp number, including country code)

5. Start the development server:
```bash
npm run dev
```

6. Open your browser to `http://localhost:5173`

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS v4** - Styling with custom glassmorphism utilities
- **Motion (Framer Motion)** - Animations
- **Zustand** - State management for cart
- **React Router** - Client-side routing
- **Sonner** - Toast notifications
- **Lucide React** - Icons

## 📝 Customizing the Menu

### Adding/Editing Products

Edit `/data/products.json`:

```json
{
  "id": "unique-product-id",
  "name": "Product Name",
  "price": 99,
  "description": "Product description here",
  "image": "https://images.unsplash.com/photo-xxxxx",
  "category": "mains"
}
```

**Categories available**: `mains`, `salads`, `desserts` (or add your own)

### Product Image Guidelines

- Use high-quality images (min 800px wide)
- Recommended aspect ratio: 4:3 or 1:1
- You can use Unsplash URLs or upload your own to `/public/images/`

## 🎨 Customizing Design

### Colors

The color scheme is defined in `/styles/globals.css`:

```css
:root {
  --divine-brown: #3b2f2f;  /* Primary dark color */
  --divine-cream: #f6efe9;  /* Background/surface color */
  --divine-olive: #6b7a4f;  /* Accent color */
}
```

### Fonts

The app uses:
- **Playfair Display** for headings (serif)
- **Inter** for body text (sans-serif)

To change fonts, edit the Google Fonts import in `/styles/globals.css`

### Glassmorphism Effects

Custom glass utilities are defined in `/styles/globals.css`:
- `.glass` - Light glass effect
- `.glass-dark` - Dark glass effect
- `.glass-card` - Card-style glass effect
- `.glass-nav` - Navigation glass effect

## 🛒 Cart & Checkout Flow

1. Users browse products and add items to cart
2. Cart is persisted in local storage (survives page refresh)
3. At checkout, users enter:
   - Name
   - Delivery or Pickup preference
   - Optional notes
4. Clicking "Send Order via WhatsApp" opens WhatsApp with a pre-filled message
5. Order is sent directly to your WhatsApp for processing

## 📱 WhatsApp Integration

### Message Format

The WhatsApp message includes:
- List of items with quantities and prices
- Total amount
- Customer name
- Delivery/Pickup preference
- Additional notes

### Testing WhatsApp

To test locally:
1. Set `VITE_WHATSAPP_NUMBER` to your number
2. Complete an order
3. You'll be redirected to WhatsApp Web (desktop) or WhatsApp app (mobile)
4. The message will be pre-filled - just click send

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and import your repository

3. Add environment variable:
   - Key: `VITE_WHATSAPP_NUMBER`
   - Value: Your WhatsApp number (e.g., `+27821234567`)

4. Deploy!

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify

3. Add environment variable in Netlify dashboard:
   - `VITE_WHATSAPP_NUMBER`

## 📁 Project Structure

```
/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── GlassButton.tsx
│   │   ├── GlassCard.tsx
│   │   ├── CategoryTile.tsx
│   │   ├── ProductCard.tsx
│   │   └── QuantitySelector.tsx
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── MenuPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── store/           # State management
│   │   └── cartStore.ts
│   ├── data/            # JSON data files
│   │   └── products.json
│   ├── styles/          # Global styles
│   │   └── globals.css
│   └── App.tsx          # Main app component
├── .env.example         # Environment variables template
└── README.md
```

## 🎯 Key Components

### GlassButton
Reusable button with glassmorphic styling and Motion animations.
Variants: `primary`, `secondary`, `outline`

### GlassCard
Container component with glass effect.
Optional hover animation.

### ProductCard
Displays product with image, info, and add-to-cart button.

### QuantitySelector
+/- buttons for adjusting quantities.

### Cart Store (Zustand)
Global state management for shopping cart:
- `add(product)` - Add item to cart
- `remove(id)` - Remove item
- `updateQty(id, quantity)` - Update quantity
- `clear()` - Clear entire cart
- `total()` - Calculate total price
- `itemCount()` - Get total item count

## 🔧 Development Tips

### Adding a New Page

1. Create page component in `/pages/`
2. Add route in `App.tsx`:
```tsx
<Route path="/new-page" element={<NewPage />} />
```
3. Add navigation link in `Nav.tsx`

### Modifying Animations

All animations use Motion. Example:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## 📞 Support

For questions or issues:
- Email: hello@divinefood.co.za
- WhatsApp: [Your number]

## 📄 License

This project is created for Divine Food (divinefood.co.za). All rights reserved.

---

**Built with ❤️ using React + TypeScript + TailwindCSS**
