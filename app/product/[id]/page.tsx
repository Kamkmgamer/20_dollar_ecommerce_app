import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import { simulateDelay } from "@/lib/delay";
import SlowImage from "@/components/SlowImage";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} - Your Company Name`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  await simulateDelay();

  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Link href="/" className="wp-back-link">
        Back to all products
      </Link>

      <div className="wp-single-product">
        <SlowImage src={product.image} alt={product.name} className="slow-image-container" />

        <div>
          <span className="wp-product-category">{product.category}</span>
          <h1 style={{ marginTop: 0 }}>{product.name}</h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>{product.description}</p>

          <div className="contact-section">
            <h4>Interested in this product?</h4>
            <p>Contact us to ask about pricing and availability. We respond quickly on WhatsApp!</p>
            <a
              href={`https://wa.me/1234567890?text=Hi! I'm interested in: ${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wp-button wp-button-whatsapp"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
