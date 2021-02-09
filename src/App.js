import React from "react";

import "./global.css";

import Card from "./components/Card";

function App() {
  const list = [
  {
    id:1,
    name: "Guilherme"
  },
  {
    id:2,
    name: "Amanda"
  },
  { 
    id:3,
    name: "João"
  },
  {
    id:4,
    name: "Lucas"
  },
  {
    id:5,
    name: "Carolina"
  }
];

  const renderList = list.map(item => (
    <li key={item.id.toString()}>
      <Card data={item} />
    </li>

  ) );
  
  return (
    <div>
      <ul>
        {renderList}
      </ul>
    </div>
  );
}

export default App;
