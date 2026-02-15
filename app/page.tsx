import Link from "next/link";
import { products } from "@/lib/products";
import { simulateDelay } from "@/lib/delay";
import SlowImage from "@/components/SlowImage";

export const dynamic = "force-dynamic";

export default async function Home() {
  await simulateDelay();

  return (
    <div>
      <header style={{ marginBottom: "3rem" }}>
        <h1>Welcome to Our Store</h1>
        <p style={{ color: "var(--muted)", maxWidth: "600px" }}>
          We offer a small selection of handmade, quality products. Browse our collection and contact us
          to place an order. We prefer WhatsApp for quick responses!
        </p>
      </header>

      <section>
        <h2>Our Products</h2>
        <div className="wp-product-grid">
          {products.map((product) => (
            <article
              key={product.id}
              className={`wp-product-card wp-product-card--${product.cardSize}`}
            >
              <Link href={`/product/${product.id}`}>
                <SlowImage src={product.image} alt={product.name} />
              </Link>
              <div className="wp-product-card-content">
                <span className="wp-product-category">{product.category}</span>
                <h3>
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p>{product.description.substring(0, 100)}...</p>
                <Link href={`/product/${product.id}`} className="wp-button">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
