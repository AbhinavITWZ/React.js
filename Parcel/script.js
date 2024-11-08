import ReactDOM from "react-dom/client";
import "./styles.css";

if (module.hot) {
  module.hot.accept();
}

let root = ReactDOM.createRoot(document.querySelector("#root"));

function Card({ imgsrc, price, brand }) {  // Destructure directly here
  return (
    <div className="cards">
      <img src={imgsrc} alt="Product" />
      <div className="details">
        <p>{brand}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    
    console.log(data);
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return <Card   
          key={product.id}        // Directly pass the properties without wrapping in cardDetails
            brand= {product.brand}
            imgsrc={ product.images[0]}
            price={product.price}
          />
        })}
      </div>
    );
  });
//   react component kuch nhi bas rewact element hi h bas uska type: function h 
