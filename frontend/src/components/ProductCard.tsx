import Link from "next/link";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group relative flex flex-col rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Sin imagen</span>
          </div>
        )}
        {!product.is_available && (
          <span className="absolute top-3 right-3 rounded-full bg-red-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            No disponible
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        {product.category_detail && (
          <span className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
            {product.category_detail.name}
          </span>
        )}
        <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {product.description || "Sin descripción"}
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-cyan-400">
            ${parseFloat(product.price).toFixed(2)}
          </span>
          <span className="text-xs text-zinc-500 group-hover:text-cyan-400/70 transition-colors">
            Ver detalle &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
