import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "./components/Header";
import FilterSidebar from "./components/FilterSidebar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import arrowLeft from "./images/arrow-left.svg";
import arrowRight from "./images/arrow-right.svg";
import { ReactComponent as ArrowUp } from "./images/arrow-up.svg";
import { ReactComponent as ArrowDown } from "./images/arrow-down.svg";
import {ReactComponent as CheckmarkIcon} from "./images/checkmark-icon.svg";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [favorites, setFavorites] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter products by category
  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        filtered.sort((a, b) => b.rating.count - a.rating.count);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, products]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="App">
      <Header />

      <div className="main-content">
        <div className="hero-section">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>

        <div className="filter-bar">
          <div className="filter-left">
            <span className="items-count">{filteredProducts.length} ITEMS</span>
            <button className="toggle-filter-btn" onClick={toggleFilter}>
              <span className="arrow-icon">
                {showFilter ? (
                  <img src={arrowLeft} alt="arrow-left" />
                ) : (
                  <img src={arrowRight} alt="arrow-right" />
                )}
              </span>
              {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
          </div>
          {/* <div className="filter-right">
            <select 
              className="sort-dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="popular">POPULAR</option>
              <option value="price-high-low">PRICE: HIGH TO LOW</option>
              <option value="price-low-high">PRICE: LOW TO HIGH</option>
            </select>
          </div> */}
          <div className="filter-right">
            <div className="custom-dropdown" ref={dropdownRef}>
              <button
                className="dropdown-toggle"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                {sortBy.replace(/-/g, " ").toUpperCase()}{" "}
                <span className="arrow">
                  {dropdownOpen ? <ArrowUp /> : <ArrowDown />}
                </span>
              </button>

              {dropdownOpen && (
                <ul className="dropdown-menu">
                  {[
                    { value: "recommended", label: "RECOMMENDED" },
                    { value: "newest", label: "NEWEST FIRST" },
                    { value: "popular", label: "POPULAR" },
                    { value: "price-high-low", label: "PRICE : HIGH TO LOW" },
                    { value: "price-low-high", label: "PRICE : LOW TO HIGH" },
                  ].map((option) => (
                    <li
                      key={option.value}
                      className={`dropdown-item ${
                        sortBy === option.value ? "active" : ""
                      }`}
                      onClick={() => {
                        setSortBy(option.value);
                        setDropdownOpen(false);
                      }}
                    >
                      {sortBy === option.value && (
                        <span className="checkmark"><CheckmarkIcon /></span>
                      )}
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          {showFilter && (
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              products={products}
            />
          )}

          <ProductGrid
            products={filteredProducts}
            loading={loading}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            showFilter={showFilter}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
