import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
