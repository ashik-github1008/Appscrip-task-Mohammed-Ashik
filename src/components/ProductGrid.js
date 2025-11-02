import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductGrid({ products, loading, favorites, toggleFavorite, showFilter }) {
  if (loading) {
    return (
      <div className={`product-grid ${!showFilter ? 'full-width' : ''}`}>
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={`product-grid ${!showFilter ? 'full-width' : ''}`}>
        <div className="no-products">No products found</div>
      </div>
    );
  }

  return (
    <div className={`product-grid ${!showFilter ? 'full-width' : ''}`}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default ProductGrid;