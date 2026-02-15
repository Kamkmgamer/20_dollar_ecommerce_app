# $20 E-Commerce App

A WordPress default theme simulation demonstrating what a $20 budget e-commerce website looks like.

## Overview

This project simulates a micro business store built with WordPress default theme (Twenty Twenty-Five). It's designed for side hustles and unserious businesses where direct WhatsApp ordering is more practical than a full website.

## Features

- WordPress Twenty Twenty-Five default theme styling
- 8 sample products with varying card sizes
- "Contact to Order" approach (no cart/checkout)
- WhatsApp integration for ordering
- Simulated slow performance (12s page load, 3s image load)

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4 + Custom WordPress-style CSS
- **Rendering**: Dynamic (force-dynamic)
- **Data**: Static product data

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── globals.css      # WordPress-style CSS
│   ├── layout.tsx       # Header, footer, WhatsApp banner
│   ├── page.tsx         # Homepage with product grid
│   └── product/[id]/    # Product detail pages
├── components/
│   └── SlowImage.tsx    # Image component with 3s delay
├── lib/
│   ├── delay.ts         # 12s page delay utility
│   └── products.ts      # Static product data
└── SPEC.md              # Project specifications
```

## Design Choices

### Intentionally "Bad" Features

This app intentionally simulates a low-budget WordPress site:

- **12 second page load delay** - Simulates slow PHP rendering
- **3 second image loading** - No image optimization
- **Inconsistent card sizes** - Mimics unprofessional WordPress themes
- **Mixed border styles** - Solid and dashed borders for visual inconsistency
- **No cart/checkout** - Direct contact ordering only

### WordPress Styling

- Serif fonts for headings (Baskerville, Times New Roman)
- WordPress blue accent color (#0073aa)
- "Proudly powered by WordPress" footer
- Minimal, default theme appearance

## Cost Breakdown

| Item | Cost |
|------|------|
| Domain | ~$12/year |
| WordPress Hosting | ~$48/year |
| **Total First Year** | ~$60 |
| **Monthly Cost** | ~$5/mo |

## Best For

- Side hustles
- Testing waters before investing more
- Simple single-product stores
- Direct messaging preferred over checkout

## License

MIT
