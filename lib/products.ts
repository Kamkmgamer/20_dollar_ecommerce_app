export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  cardSize: "small" | "medium" | "large";
}

export const products: Product[] = [
  {
    id: 1,
    name: "Handmade Soap Bar",
    description: "Natural handmade soap with lavender scent. Made with organic ingredients and no harsh chemicals. Perfect for sensitive skin.",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=400&fit=crop",
    category: "Bath & Body",
    cardSize: "small",
  },
  {
    id: 2,
    name: "Cotton Tote Bag",
    description: "Eco-friendly cotton tote bag. Perfect for shopping, beach trips, or everyday use. Machine washable and durable.",
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef26aa4b?w=400&h=400&fit=crop",
    category: "Accessories",
    cardSize: "large",
  },
  {
    id: 3,
    name: "Beeswax Candles Set",
    description: "Set of 3 pure beeswax candles. Natural honey scent, clean burning, and long lasting. Perfect for creating a cozy atmosphere.",
    image: "https://images.unsplash.com/photo-1602607434932-06b9e8566049?w=400&h=400&fit=crop",
    category: "Home Decor",
    cardSize: "medium",
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug",
    description: "Handcrafted ceramic coffee mug with unique glaze pattern. Each piece is one of a kind. Microwave and dishwasher safe.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    category: "Kitchen",
    cardSize: "small",
  },
  {
    id: 5,
    name: "Linen Tea Towels",
    description: "Set of 2 linen tea towels in natural color. Highly absorbent and gets softer with each wash. Perfect for kitchen use.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop",
    category: "Kitchen",
    cardSize: "large",
  },
  {
    id: 6,
    name: "Wooden Cutting Board",
    description: "Handmade wooden cutting board from sustainable sources. Natural wood grain makes each piece unique. Easy to maintain.",
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=400&h=400&fit=crop",
    category: "Kitchen",
    cardSize: "medium",
  },
  {
    id: 7,
    name: "Dried Flower Bouquet",
    description: "Beautiful dried flower bouquet that lasts forever. Perfect for home decoration or as a gift. No maintenance required.",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
    category: "Home Decor",
    cardSize: "small",
  },
  {
    id: 8,
    name: "Hand-knitted Scarf",
    description: "Cozy hand-knitted scarf made from soft wool blend. Perfect for cold weather. Available in various colors upon request.",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop",
    category: "Accessories",
    cardSize: "medium",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
