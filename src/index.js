import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozerella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinacci",
    ingredients: "Tomato , Mozerella , spinch and ricotta cheese",
    price: 13,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Funghi",
    ingredients: "Bread , basil , olive oil and rosemary",
    price: 19,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Salamino Pizza",
    ingredients: "Bread , Salmon , cottage cheeze",
    price: 8,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Proscuitto Pizza",
    ingredients: "Bread ,Spinach, Garlic , olive oil and rosemary",
    price: 14,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Pizzeria</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Welcome to our restraunt.We serve freshly made pizzas and hope that you
        all will like it.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizzaObj) => (
          <Pizza pizzaObj={pizzaObj} />
        ))}
      </ul>
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <div className={pizzaObj.soldOut ? "sold-out pizza" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <li>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </li>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="header footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're close.Come back tommorow please? We'll be happy to serve you:)
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00 . Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}
//this is for react version 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
