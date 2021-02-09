import React from "react";

import "./styles.css"

import Card from "../../Card"

export default function ShoppingList() {
    const list = [
        {
          id:1,
          name: "Iogurte",
          brand: "Nestle"
        },
        {
          id:2,
          name: "Maçã",
          brand: "Fuji"
        },
        { 
          id:3,
          name: "Sorvete",
          brand: "Nestle"
        },
        {
          id:4,
          name: "Leite",
          brand: "Parmalat"
        },
        {
          id:5,
          name: "Feijão",
          brand: "COMBRASIL"
        },
        {
          id:6,
          name: "Arroz",
          brand: "Tio joão"
        },
        {
            id:7,
            name: "Carne",
            brand: "Friboi"
        },
        {
            id:8,
            name: "Batata",
            brand: "Pringles"
        }
    ];
      
        const renderList = list.map(item => (
          <li key={item.id.toString()}>
            <Card data={item} />
          </li>
      
        ) );
    return (
        <div className="container">
            <div className="title-container">
                <h1>Lista de Compras</h1>
            </div>
            <div>
                <ul>{renderList}</ul>
            </div>
        </div>
    )
}