import "./searchPage.css";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import products from "../data/products";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";

export default function SearchPage() {
  const [filtered, setFiltered] = useState(products);
  const [filterOpen, setFilterOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  useEffect(() => {
    let filteredProducts = products;

    // CATEGORY FILTER
    if (category) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.category.toLowerCase() === category.toLowerCase() ||
          p.tags?.includes(category.toLowerCase()),
      );
    }

    // SEARCH FILTER
    if (search) {
      filteredProducts = filteredProducts.filter((p) =>
        p.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
      );
    }

    setFiltered(filteredProducts);
  }, [category, search]);

  return (
    <>
      <div className="layout">
        <div className="mobile-filter-bar">
          <button
            className="mobile-filter-btn"
            onClick={() => setFilterOpen(true)}
          >
            Filter
          </button>
        </div>

        {filterOpen && (
          <div
            className="filter-overlay"
            onClick={() => setFilterOpen(false)}
          />
        )}

        <Filters
          products={products}
          setFiltered={setFiltered}
          closeFilter={() => setFilterOpen(false)}
        />

        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
