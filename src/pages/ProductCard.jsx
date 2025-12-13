
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product, addToCart  }) {
  return (
    
      <div className="card">
        <Link to={`/product/${product.id}`} className="card-link">
        <img src={product.image} alt={product.name} />
        <h3>
          {product.name}
          
          <span className="cate">₹{product.price}</span>
        </h3>
        {/* <p>{product.details}</p> */}
        </Link>
        <button onClick={() => addToCart(product) }>Add to Cart</button>
      </div>
    
  );
}
