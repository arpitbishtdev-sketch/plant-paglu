import "./filters.css";
import { useState } from "react";

export default function Filters({ setFiltered, products, closeFilter }) {
  const [activeTag, setActiveTag] = useState("all");

  const filterByTag = (tag) => {
    setActiveTag(tag);

    if (tag === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.tags?.includes(tag)));
    }

    if (window.innerWidth <= 768) {
      closeFilter();
    }
  };

  return (
    <div className="filters">
      <h3 className="filter-title">CATEGORIES</h3>

      <div className="filter-list">
        <button
          className={activeTag === "all" ? "active-btn" : ""}
          onClick={() => filterByTag("all")}
        >
          All
        </button>

        <button
          className={activeTag === "indoor" ? "active-btn" : ""}
          onClick={() => filterByTag("indoor")}
        >
          Indoor Plant
        </button>

        <button
          className={activeTag === "table-desk" ? "active-btn" : ""}
          onClick={() => filterByTag("table-desk")}
        >
          Table Desk
        </button>

        <button
          className={activeTag === "office-space" ? "active-btn" : ""}
          onClick={() => filterByTag("office-space")}
        >
          Office Space
        </button>

        <button
          className={activeTag === "gifting" ? "active-btn" : ""}
          onClick={() => filterByTag("gifting")}
        >
          Home Decor & Gifting
        </button>

        <button
          className={activeTag === "ceramic" ? "active-btn" : ""}
          onClick={() => filterByTag("ceramic")}
        >
          Ceramic Pots & Planter
        </button>

        <button
          className={activeTag === "self-watering" ? "active-btn" : ""}
          onClick={() => filterByTag("self-watering")}
        >
          Self Watering Pots
        </button>
      </div>

      <h3 className="filter-title">COLOR</h3>

      <div className="color-row">
        <div
          className={`color white ${activeTag === "white" ? "active-color" : ""}`}
          onClick={() => filterByTag("white")}
        />
        <div
          className={`color green ${activeTag === "green" ? "active-color" : ""}`}
          onClick={() => filterByTag("green")}
        />
        <div
          className={`color pink ${activeTag === "pink" ? "active-color" : ""}`}
          onClick={() => filterByTag("pink")}
        />
        <div
          className={`color brown ${activeTag === "brown" ? "active-color" : ""}`}
          onClick={() => filterByTag("brown")}
        />
        <div
          className={`color red ${activeTag === "red" ? "active-color" : ""}`}
          onClick={() => filterByTag("red")}
        />
        <div
          className={`color mint ${activeTag === "mint" ? "active-color" : ""}`}
          onClick={() => filterByTag("mint")}
        />
        <div
          className={`color cream ${activeTag === "cream" ? "active-color" : ""}`}
          onClick={() => filterByTag("cream")}
        />
      </div>

      <h3 className="filter-title">PLANT TYPE</h3>

      <div className="filter-list">
        <button
          className={activeTag === "aglaonema" ? "active-btn" : ""}
          onClick={() => filterByTag("aglaonema")}
        >
          Aglaonema
        </button>

        <button
          className={activeTag === "money-plant" ? "active-btn" : ""}
          onClick={() => filterByTag("money-plant")}
        >
          Money Plant
        </button>

        <button
          className={activeTag === "jade-plant" ? "active-btn" : ""}
          onClick={() => filterByTag("jade-plant")}
        >
          Jade Plant
        </button>

        <button
          className={activeTag === "lucky-bamboo" ? "active-btn" : ""}
          onClick={() => filterByTag("lucky-bamboo")}
        >
          Lucky Bamboo
        </button>
      </div>
    </div>
  );
}
