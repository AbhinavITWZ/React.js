import React from "react";
import { ProductList } from "../Utils/constant";
// console.log(ProductList)
export default function Product() {
  return (
    <section>
      <div className="container">
        {
          //hum js me creation ke baad append karte the na toh wiase hi isme return karenge
          ProductList.map((e) => {
            return (
              <div className="product-item id={e.id}">
                <img src={e.image} />
                <details>
                  <summary>{e.category}</summary>
                  <p>Hello,All This is :</p>
                  <p>{e.description}</p>
                </details>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}
