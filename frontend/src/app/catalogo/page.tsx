import { fetchAPI } from "@/services/api";
import type { Category, Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "./CategoryFilter";
import SearchWrapper from "./SearchWrapper";

interface CatalogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const selectedCategory = typeof params.categoria === "string" ? params.categoria : "";
  const searchQuery = typeof params.busqueda === "string" ? params.busqueda : "";

  let categories: Category[] = [];
  let products: Product[] = [];

  try {
    const [cats, prods] = await Promise.all([
      fetchAPI<Category[]>("/products/category/"),
      fetchAPI<Product[]>("/products/product/"),
    ]);
    categories = cats;
    products = prods;
  } catch {
    console.warn("API no disponible");
  }

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category_detail?.slug !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(q);
      const descMatch = product.description?.toLowerCase().includes(q) ?? false;
      if (!nameMatch && !descMatch) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100">Catálogo</h1>
          <p className="mt-2 text-zinc-400">Explora todos nuestros productos disponibles</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchWrapper initialQuery={searchQuery} />
          </div>
          <CategoryFilter categories={categories} selected={selectedCategory} />
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto text-zinc-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-zinc-500 text-lg">No se encontraron productos</p>
            <p className="text-zinc-600 text-sm mt-1">Intenta con otros filtros o términos de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}
