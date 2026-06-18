"use client";

import { useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";

interface SearchWrapperProps {
  initialQuery: string;
}

export default function SearchWrapper({ initialQuery }: SearchWrapperProps) {
  const router = useRouter();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("busqueda", value);
    } else {
      params.delete("busqueda");
    }
    const qs = params.toString();
    router.push(qs ? `/catalogo?${qs}` : "/catalogo");
  };

  return <SearchBar value={initialQuery} onChange={handleSearch} />;
}
