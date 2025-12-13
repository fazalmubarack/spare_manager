import { useParams } from "react-router-dom";
import { useState } from "react";
import { productsList } from "./Home";  // import products
import "./ProductDetails.css";

export default function ProductDetails({   addToCart }) {
    
  const { id } = useParams();
  const product = productsList.find((p) => p.id === Number(id));

  if (!product) return <h2>Product Not Found</h2>;

  const [mainImage, setMainImage] = useState(
    product.images ? product.images[0] : product.image
  );

  return (
    <div className="details-container">
      {/* Left Section: Image gallery */}
      <div className="image-section">
        <img src={mainImage} alt={product.name} className="main-img" />

        <div className="thumbnail-row">
          {(product.images || [product.image]).map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setMainImage(img)}
              className="thumb-img"
            />
          ))}
        </div>
      </div>

      {/* Right Section: Details */}
      <div className="info-section">
        <h1>{product.name} For <span className="aa">{product.category}</span></h1>
        <h2>₹{product.price}</h2>
        <p>{product.details}</p>

        <button className="addCartBtn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
         
      </div>
    </div>
  );
}
