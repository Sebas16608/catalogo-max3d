import Link from "next/link";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/catalogo?categoria=${category.slug}`}
      className="group relative rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full" />
      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors">
        {category.name}
      </h3>
      {category.description && (
        <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      )}
      <span className="mt-4 inline-flex items-center text-xs font-medium text-cyan-400 gap-1 group-hover:gap-2 transition-all">
        Ver productos <span>&rarr;</span>
      </span>
    </Link>
  );
}
