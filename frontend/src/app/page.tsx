import { fetchAPI } from "@/services/api";
import type { Category, Product } from "@/types";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ProcessSection from "@/components/ProcessSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function Home() {
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
    console.warn("API no disponible, mostrando secciones sin datos");
  }

  return (
    <>
      <HeroSection />

      <section className="relative py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">Categorías</h2>
            <p className="mt-3 text-zinc-400">Explora nuestros productos por categoría</p>
          </div>
          {categories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-600">Cargando categorías...</p>
          )}
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">Productos destacados</h2>
              <p className="mt-3 text-zinc-400">Lo más popular de nuestro catálogo</p>
            </div>
          </div>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-600">Cargando productos...</p>
          )}
        </div>
      </section>

      <ProcessSection />

      <section className="relative py-24 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Contáctanos hoy y descubre cómo podemos dar vida a tus ideas con la mejor calidad en impresión 3D.
          </p>
          <div className="mt-8 inline-block">
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
