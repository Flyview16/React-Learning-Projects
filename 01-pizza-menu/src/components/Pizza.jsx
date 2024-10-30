import React from "react";

function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name} </h3>
        <p>{props.pizzaObj.ingredients} </p>
        <span>
          {props.pizzaObj.soldOut ? "Sold Out" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

export default Pizza;
