import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ProductTable from "./ProductTable";
const products = [
  {
    categorie: "electronic",
    price: "3000$",
    name: "iphone 11",
  },
  {
    categorie: "electronic",
    price: "2000$",
    name: "samsung s9",
  },
  {
    categorie: "clothes",
    price: "40$",
    name: "jean",
  },
  {
    categorie: "electronic",
    price: "4000$",
    name: "pc gamer",
  },

];
const product = {
  categorie: "clothes",
  price: "40$",
  name: "jean",
};

ReactDOM.render(
  <React.StrictMode>
    <ProductTable products={products} />
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
