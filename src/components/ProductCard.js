import "./ProductCard.css";
import { ReactComponent as HeartIcon } from "../images/heart-icon.svg";

function ProductCard({ product, isFavorite, toggleFavorite }) {
  const truncateTitle = (title, maxLength = 40) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => toggleFavorite(product.id)}
          aria-label="Add to favorites"
        >
          <HeartIcon
            className={isFavorite ? "like-icon-liked" : "like-icon-unlike"}
          />
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-title">{truncateTitle(product.title)}</h3>

        <div className="product-meta">
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-rating">
            <span className="rating-stars">★</span>
            <span className="rating-value">{product.rating.rate}</span>
            <span className="rating-count">({product.rating.count})</span>
          </div>
        </div>

        <p className="sign-in-text">
          {" "}
          <span className="sign-in-text-span">Sign in</span> or Create an
          account to see pricing
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
