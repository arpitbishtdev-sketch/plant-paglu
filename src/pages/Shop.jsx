import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImagesByTagUrl } from "../utils/cloudinary";
import products from "../data/products";

export default function Shop() {
  const location = useLocation();

  //   Category (query param based)
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const search = params.get("search");

  const [images, setImages] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(
        (p) =>
          p.category.toLowerCase() === category.toLowerCase() ||
          p.tags?.includes(category.toLowerCase()),
      );
    }

    if (search && search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.tags?.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase().trim()),
        ),
      );
    }

    setImages(filtered);
  }, [category, search]);

  return (
    <div style={{ padding: "40px" }}>
      <h2>
        {category
          ? `Category: ${category}`
          : search
            ? `Search Results for: ${search}`
            : "Shop"}
      </h2>

      <div style={{ marginTop: "30px" }}>
        {images.length === 0 ? (
          <div
            style={{
              padding: "60px 0",
              fontSize: "18px",
              color: "#777",
            }}
          >
            Sorry, we don’t have this right now.
          </div>
        ) : (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {images.map((product) => (
              <div key={product.id}>{product.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
