import React from "react";

import "./styles.css";

export default function Card({data}) {
    return(
<div className="card-container">
    <h3>
        <strong>Nome do Produto</strong>: {data.name}
    </h3>
    <h3>
        <strong>Nome da Marca</strong>: {data.brand}
    </h3>
</div>
    
    );
}