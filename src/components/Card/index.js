import React from "react";

import "./styles.css";

export default function Card({data}) {
    return(
<div className="card-container">
    <h3>
        <strong>Nome do Usuário</strong>: {data.name}
    </h3>
</div>
    
    );
}