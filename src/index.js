import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
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
      <div className="mainDiv">
        <div>
          <Pizza
            name="Pizza Spincai"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            price={120}
            photoName="pizzas/spinaci.jpg"
          />
          <Pizza
            name="Pizza Funghi"
            ingredients="Tomato, mozarella, and onion"
            price={120}
            photoName="pizzas/funghi.jpg"
          />
          <Pizza
            name="Pizza Margherita"
            ingredients="Tomato, mozarella, Basil, and cherry tomatoes"
            price={120}
            photoName="pizzas/margherita.jpg"
          />
        </div>
        <div>
          <Pizza
            name="Pizza Prosciutto"
            ingredients="Tomato, mozarella and ricotta cheese"
            price={120}
            photoName="pizzas/prosciutto.jpg"
          />
          <Pizza
            name="Pizza Salamino"
            ingredients="Tomato, mozarella, chicken, and cheese"
            price={120}
            photoName="pizzas/salamino.jpg"
          />
          <Pizza
            name="Pizza Focaccia"
            ingredients="Tomato, mozarella, chicken"
            price={120}
            photoName="pizzas/focaccia.jpg"
          />
        </div>
      </div>
    </main>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>price :{props.price}</span>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer className="header footer">
      {" "}
      {new Date().toLocaleTimeString()} We're currently open.
    </footer>
  );
}
//this is for react version 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
