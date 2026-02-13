import "./navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const inputRef = useRef();

  // Auto focus when search opens
  useEffect(() => {
    if (showSearch) {
      inputRef.current?.focus();
    }
  }, [showSearch]);

  const handleSearch = () => {
    if (text.trim() !== "") {
      navigate(`/shop?search=${text.toLowerCase()}`);
      setShowSearch(false);
      setText("");
    }
  };

  return (
    <>
      <header className="nav">
        <div className="nav-left">
          <h2 className="logo" onClick={() => navigate("/")}>
            Plant Paglu
          </h2>
          <div className="divider" />
        </div>

        {/* Desktop menu */}
        <nav className="nav-center">
          <Link to="/shop?category=indoor">Indoor Plants</Link>
          <Link to="/shop?category=table-desk">Table Desk</Link>
          <Link to="/shop?category=office-space">Office Space</Link>
          <Link to="/shop?category=gifting">Home Decor & Gifting</Link>
          <Link to="/shop?category=ceramic">Ceramic Pots & Planters</Link>
          <Link to="/shop?category=self-watering">
            Soil Mix & Self Watering Pots
          </Link>
        </nav>

        {/* Right side */}
        <div className="nav-right">
          <FaSearch
            className="icon desktop-search"
            onClick={() => setShowSearch((prev) => !prev)}
          />

          {/* About Us */}
          <div
            className="about-link desktop-only"
            onClick={() => navigate("/about")}
          >
            <span className="pipe">|</span> About Us
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setOpen(true)}>
            <FaBars />
          </div>
        </div>
      </header>

      {/* SEARCH OVERLAY */}
      {showSearch && (
        <div className="search-overlay" onClick={() => setShowSearch(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <h3>Search</h3>
              <FaTimes
                className="search-close"
                onClick={() => setShowSearch(false)}
              />
            </div>

            <div className="search-input-wrapper">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search plants, ceramic pots..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <FaSearch className="search-icon-inside" onClick={handleSearch} />
            </div>

            <div className="search-suggestions">
              <p>POPULAR SEARCHES</p>
              <div className="search-tags">
                {[
                  { label: "Gifting Plants", value: "gifting" },
                  { label: "Money Plant", value: "money-plant" },
                  { label: "White Ceramic Pot", value: "white" },
                  { label: "Office Desk Plant", value: "office-space" },
                ].map((item) => (
                  <span
                    key={item.value}
                    onClick={() => {
                      navigate(`/shop?search=${item.value}`);
                      setShowSearch(false);
                    }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <FaTimes className="close" onClick={() => setOpen(false)} />

        <Link to="/shop?category=indoor">Indoor Plants</Link>
        <Link to="/shop?category=table-desk">Table Desk</Link>
        <Link to="/shop?category=office-space">Office Space</Link>
        <Link to="/shop?category=gifting">Home Decor & Gifting</Link>
        <Link to="/shop?category=ceramic">Ceramic Pots & Planters</Link>
        <Link to="/shop?category=self-watering">
          Soil Mix & Self Watering Pots
        </Link>

        <Link to="/about" onClick={() => setOpen(false)}>
          About Us
        </Link>
      </div>
    </>
  );
}
