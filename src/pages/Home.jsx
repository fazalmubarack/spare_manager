import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import "./Home.css";
import Hero from "./Hero.jsx";
import headlight from './images/headlight.webp'
import headlight1 from './images/headlight1.jpg'
import headlight2 from './images/headlight2.webp'
import id2 from './images/id2.jpg'
import id21 from './images/id2.1.jpg'
import id22 from './images/id2.2.jpg'
import id2a from './images/id2a.jpg'
import id2b from './images/id2b.jpg'
import id4 from './images/id4.webp'
import id41 from './images/id4.1.webp'
import id5 from './images/id5.jpg'
import id51 from './images/id5.1.jpg'
import id52 from './images/id5.2.jpg'
import id6 from './images/id6.webp'
import id61 from './images/id6.1.webp'
import id7 from './images/id7.webp'
import id71 from './images/id7.1.webp'
import id72 from './images/id7.2.webp'
import id8 from './images/id8.jpeg'
import id81 from './images/id8.1.jpeg'
import id9 from './images/id9.jpg'
import id91 from './images/id9.1.jpg'
import id10 from './images/id10.jpg'
import id10a from './images/id10.1.jpg'
import id11 from './images/id11.jpg'
import id11a from './images/id11a.jpg'
import id12 from './images/id12.webp'
import id12a from './images/id12a.jpg'
import id13 from './images/id13.jpg'
import id13a from './images/id13a.jpg'
import id13b from './images/id13b.jpg'
import id14 from './images/id14.jpg'
import id15 from './images/id15.jpg'
import id15a from './images/id15a.jpg'
import id16 from './images/id16.webp'
import id16a from './images/id16a.jpg'
import id17 from './images/id17.jpg'
import id17a from './images/id17a.jpg'
import id17b from './images/id17b.jpg'
import id18 from './images/id18.webp'
import id18a from './images/id18a.jpg'
import id19 from './images/id19.jpg'
import id19a from './images/id19a.jpg'
import id20 from './images/id20.jpg'
import id20a from './images/id20a.jpg'
import id20b from './images/id20b.jpg'




const products = [
  {
    id: 1,
    name: "Headlight",
    price: 1650,
    image: headlight,
    images: [headlight, headlight1, headlight2],
    category: "Car",
    details:
      "High-intensity TATA headlight designed for superior night visibility, long lifespan, and resistance to vibration and harsh weather conditions."
  },
  {
    id: 2,
    name: "Chain Sprocket Kit",
    price: 1200,
    image: id2a,
    images: [id2a, id2b],
    category: "Bike",
    details:
      "Precision-engineered chain sprocket kit made from hardened steel to ensure smooth power transmission, reduced wear, and extended service life."
  },
  {
    id: 3,
    name: "Air Filter",
    price: 1800,
    image: id2,
    images: [id2, id21, id22],
    category: "Truck",
    details:
      "Heavy-duty truck air filter that effectively blocks dust and contaminants, improving engine efficiency and protecting internal components."
  },
  {
    id: 4,
    name: "Charging Cable",
    price: 3500,
    image: id4,
    images: [id4, id41],
    category: "EV",
    details:
      "Fast and reliable EV charging cable with heat-resistant insulation for safe, efficient, and consistent power delivery."
  },
  {
    id: 5,
    name: "Brake Pads",
    price: 1500,
    image: id5,
    images: [id5, id51, id52],
    category: "Car",
    details:
      "Premium-quality brake pads offering strong stopping power, reduced noise, and minimal brake dust for enhanced driving safety."
  },
  {
    id: 6,
    name: "Disc Brake",
    price: 800,
    image: id6,
    images: [id6, id61],
    category: "Bike",
    details:
      "High-performance disc brake designed for consistent braking, excellent heat dissipation, and superior rider control."
  },
  {
    id: 7,
    name: "Headlight Assembly",
    price: 2400,
    image: id7,
    images: [id7, id71,id72],
    category: "Truck",
    details:
      "Rugged truck headlight assembly built to withstand rough conditions while delivering bright and focused illumination."
  },
  {
    id: 8,
    name: "Battery Cooling Fan",
    price: 2600,
    image: id8,
    images: [id8, id81],
    category: "EV",
    details:
      "Advanced cooling fan that maintains optimal EV battery temperature, improving performance and extending battery life."
  },
  {
    id: 9,
    name: "AC Filter",
    price: 450,
    image: id9,
    images: [id9,id91],
    category: "Car",
    details:
      "High-efficiency AC filter that removes dust, pollen, and pollutants to keep the car cabin air clean and fresh."
  },
  {
    id: 10,
    name: "Spark Plug",
    price: 300,
    image: id10,
    images: [id10,id10a],
    category: "Bike",
    details:
      "Durable spark plug delivering quick ignition, better fuel efficiency, and smooth engine performance."
  },
  {
    id: 11,
    name: "Brake Shoe",
    price: 2200,
    image: id11,
    images: [id11,id11a],
    category: "Truck",
    details:
      "Heavy-duty brake shoe designed for commercial trucks, ensuring reliable braking under heavy loads."
  },
  {
    id: 12,
    name: "Motor Controller",
    price: 5200,
    image: id12,
    images: [id12,id12a],
    category: "EV",
    details:
      "High-efficiency motor controller that optimizes power delivery, improves acceleration, and enhances EV range."
  },
  {
    id: 13,
    name: "Wiper Blade",
    price: 350,
    image: id13,
    images: [id13,id13a,id13b],
    category: "Car",
    details:
      "All-weather silicone wiper blade designed for streak-free wiping and quiet operation in all climates."
  },
  {
    id: 14,
    name: "Headlight",
    price: 550,
    image: id14,
    images: [id14],
    category: "Bike",
    details:
      "Energy-efficient LED headlight providing excellent brightness and improved visibility for safer night rides."
  },
  {
    id: 15,
    name: "Oil Filter",
    price: 900,
    image: id15,
    images: [id15,id15a],
    category: "Truck",
    details:
      "High-capacity oil filter that traps impurities and ensures smooth lubrication for heavy-duty truck engines."
  },
  {
    id: 16,
    name: "Tyre",
    price: 3000,
    image: id16,
    images: [id16,id16a],
    category: "Car",
    details:
      "Low rolling-resistance tyre designed specifically for Car to improve range, grip, and ride comfort."
  },
  {
    id: 17,
    name: "Alloy Wheel",
    price: 4500,
    image: id17,
    images: [id17,id17a,id17b],
    category: "Car",
    details:
      "Lightweight and stylish alloy wheel that enhances vehicle handling, fuel efficiency, and appearance."
  },
  {
    id: 18,
    name: "Rear Shock Absorber",
    price: 1300,
    image: id18,
    images: [id18,id18a],
    category: "Bike",
    details:
      "High-strength shock absorber providing improved stability, comfort, and control on uneven roads."
  },
  {
    id: 19,
    name: "Fuel Pump",
    price: 3500,
    image: id19,
    images: [id19,id19a],
    category: "Truck",
    details:
      "Robust fuel pump engineered for consistent fuel delivery in long-distance and heavy-duty truck usage."
  },
  {
    id: 20,
    name: "LED Headlight",
    price: 1800,
    image: id20,
    images: [id20,id20a,id20b],
    category: "EV",
    details:
      "Energy-efficient LED headlight offering bright illumination with low power consumption for EV models."
  }
];


export const productsList = products;
export default function Home({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const categories = ["All", "Car", "Bike", "Truck", "EV"];
  // const categories = ["All", "Car", "Bike", "Truck", "EV", "Accessories"];

  // filter logic
  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory;

    const matchSearch = p.name.toLowerCase().includes(searchText.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="home-container">
      {/* <h2>Spare Parts Market</h2> */}
      <Hero/>
<div className="a">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search spare parts..."
        className="search-box"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Category Buttons */}
      <div className="category-section">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active-cat-btn" : "cat-btn"}
          >
            {cat}
          </button>
        ))}
      </div>
</div>

      {/* Products */}
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
