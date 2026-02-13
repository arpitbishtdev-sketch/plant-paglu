import "./filters.css";

export default function Filters({ setFiltered, products, closeFilter }) {
  const filterByTag = (tag) => {
    if (tag === "all") setFiltered(products);
    else setFiltered(products.filter((p) => p.tags?.includes(tag)));

    if (window.innerWidth <= 768) {
      closeFilter();
    }
  };

  return (
    <div className="filters">
      <h3 className="filter-title">CATEGORIES</h3>

      <div className="filter-list">
        <button onClick={() => filterByTag("all")}>All</button>
        <button onClick={() => filterByTag("indoor")}>Indoor Plant</button>
        <button onClick={() => filterByTag("table-desk")}>Table Desk</button>
        <button onClick={() => filterByTag("office-space")}>
          Office Space
        </button>
        <button onClick={() => filterByTag("gifting")}>
          Home Decor & Gifting
        </button>
        <button onClick={() => filterByTag("ceramic")}>
          Ceramic Pots & Planter
        </button>
        <button onClick={() => filterByTag("self-watering")}>
          Self Watering Pots
        </button>
      </div>

      <h3 className="filter-title">COLOR</h3>

      <div className="color-row">
        <div className="color white" onClick={() => filterByTag("white")} />
        <div className="color green" onClick={() => filterByTag("green")} />
        <div className="color pink" onClick={() => filterByTag("pink")} />
        <div className="color brown" onClick={() => filterByTag("brown")} />
        <div className="color red" onClick={() => filterByTag("red")} />
        <div className="color mint" onClick={() => filterByTag("mint")} />
      </div>

      <h3 className="filter-title">PLANT TYPE</h3>

      <div className="filter-list">
        <button onClick={() => filterByTag("aglaonema")}>Aglaonema</button>
        <button onClick={() => filterByTag("money-plant")}>Money Plant</button>
        <button onClick={() => filterByTag("jade-plant")}>Jade Plant</button>
        <button onClick={() => filterByTag("lucky-bamboo")}>
          Lucky Bamboo
        </button>
      </div>
    </div>
  );
}
