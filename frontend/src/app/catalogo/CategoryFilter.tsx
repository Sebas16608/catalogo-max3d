"use client";

import { useRouter } from "next/navigation";
import type { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  selected: string;
}

export default function CategoryFilter({ categories, selected }: CategoryFilterProps) {
  const router = useRouter();

  const handleChange = (slug: string) => {
    const params = new URLSearchParams(window.location.search);
    if (slug) {
      params.set("categoria", slug);
    } else {
      params.delete("categoria");
    }
    const qs = params.toString();
    router.push(qs ? `/catalogo?${qs}` : "/catalogo");
  };

  return (
    <select
      value={selected}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all min-w-[180px]"
    >
      <option value="">Todas las categorías</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
