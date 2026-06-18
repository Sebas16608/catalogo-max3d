import { notFound } from "next/navigation";
import { fetchAPI } from "@/services/api";
import type { Product } from "@/types";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

interface ProductDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = await params;
  let product: Product | null = null;

  try {
    const allProducts = await fetchAPI<Product[]>("/products/product/");
    product = allProducts.find((p) => p.slug === slug) ?? null;
  } catch {
    console.warn("API no disponible");
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al catálogo
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-zinc-600">
                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Sin imagen disponible</span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              {product.category_detail && (
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                  {product.category_detail.name}
                </span>
              )}
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  product.is_available
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {product.is_available ? "Disponible" : "No disponible"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100">{product.name}</h1>

            <p className="mt-6 text-4xl font-bold text-cyan-400">
              ${parseFloat(product.price).toFixed(2)}
            </p>

            {product.description && (
              <p className="mt-6 text-zinc-400 leading-relaxed text-lg">{product.description}</p>
            )}

            {product.author && (
              <div className="mt-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-sm text-zinc-500">Diseñado por</span>
                <a
                  href={product.author}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors truncate"
                >
                  {product.author}
                </a>
              </div>
            )}

            <div className="mt-8">
              <WhatsAppButton productName={product.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
