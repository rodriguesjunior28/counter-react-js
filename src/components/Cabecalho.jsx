import React from 'react';
import '../css/style.css';


//rafc abreviamento de import React from "react"
const Cabecalho = () => {
  return (
    <div className="container">
      <h1>Contador</h1>
      <p id="contador">0</p>
      <div className="buttons">
        <button id="increment">Incrementar</button>
        <button id="decrement">Decrementar</button>
      </div>
    </div>
  )
}

export default Cabecalho;


//raface abreviamento de import Ract from "react"
/*const Cabecalho = () => {
  return (
    <div>Cabecalho</div>
  )
}

export default Cabecalho*/