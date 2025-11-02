import { useState } from 'react';
import './FilterSidebar.css';
import {ReactComponent as ArrowUp} from '../images/arrow-up.svg';
import {ReactComponent as ArrowDown} from '../images/arrow-down.svg';

function FilterSidebar({ selectedCategory, setSelectedCategory, products }) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    priceRange: false,
    rating: false
  });

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(p => p.category))];

  // Count products per category
  const getCategoryCount = (category) => {
    if (category === 'all') return products.length;
    return products.filter(p => p.category === category).length;
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatCategoryName = (category) => {
    if (category === 'all') return 'ALL';
    return category.toUpperCase().replace(/'/g, '');
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>

      <div className="filter-separator"></div>

      {/* Category Filter */}
      <div className="filter-section">
        <div className="filter-section-header" onClick={() => toggleSection('category')}>
          <h3>CATEGORY</h3>
          <span className={`arrow ${expandedSections.category ? 'up' : 'down'}`}>
            {expandedSections.category ? <ArrowUp /> : <ArrowDown />}
          </span>
        </div>
        
        {expandedSections.category && (
          <div className="filter-options">
            <button className="unselect-all">Unselect all</button>
            
            {categories.map(category => (
              <div key={category} className="filter-option">
                <input
                  type="radio"
                  id={category}
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                />
                <label htmlFor={category}>
                  {formatCategoryName(category)} ({getCategoryCount(category)})
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="filter-separator"></div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <div className="filter-section-header" onClick={() => toggleSection('priceRange')}>
          <h3>PRICE RANGE</h3>
          <span className={`arrow ${expandedSections.priceRange ? 'up' : 'down'}`}>
            {expandedSections.priceRange ? <ArrowUp /> : <ArrowDown />}
          </span>
        </div>
        
        {expandedSections.priceRange && (
          <div className="filter-options">
            <button className="unselect-all">Unselect all</button>
            <div className="filter-option">
              <input type="checkbox" id="under50" />
              <label htmlFor="under50">Under $50</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="50to100" />
              <label htmlFor="50to100">$50 - $100</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="100to200" />
              <label htmlFor="100to200">$100 - $200</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="over200" />
              <label htmlFor="over200">Over $200</label>
            </div>
          </div>
        )}
      </div>

      <div className="filter-separator"></div>

      {/* Rating Filter */}
      <div className="filter-section">
        <div className="filter-section-header" onClick={() => toggleSection('rating')}>
          <h3>RATING</h3>
          <span className={`arrow ${expandedSections.rating ? 'up' : 'down'}`}>
            {expandedSections.rating ? <ArrowUp /> : <ArrowDown />}
          </span>
        </div>
        
        {expandedSections.rating && (
          <div className="filter-options">
            <button className="unselect-all">Unselect all</button>
            <div className="filter-option">
              <input type="checkbox" id="4stars" />
              <label htmlFor="4stars">4 Stars & Above</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="3stars" />
              <label htmlFor="3stars">3 Stars & Above</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="2stars" />
              <label htmlFor="2stars">2 Stars & Above</label>
            </div>
          </div>
        )}
      </div>

      <div className="filter-separator"></div>
    </div>
  );
}

export default FilterSidebar;