import React from "react";
import "./App.css";

// componentes
import Primeiro from "./components/Primeiro";
import ComParametro from "./basicos/ComParametro";
import ComFilhos from "./basicos/ComFilhos";
// import Card from "./components/Card";
import Card from "./components/layout/Card";
import Repeticao from "./basicos/Repeticao";
import Condicional from "./basicos/Condicional";

export default (props) => (
  <div className="App">
    <Card titulo="Condicional">
      <Condicional numero={10} />
    </Card>
    <Card titulo="Repetição">
      <Repeticao />
    </Card>
    <Card titulo="Componente com Parametro">
      <ComFilhos>
        <ul>
          <li>ana</li>
          <li>bia</li>
          <li>carlos</li>
          <li>daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="Exercicio x">
      <ComParametro
        titulo="Componente com Parametro"
        subtitulo="esse é o subtitulo"
      />
    </Card>
    <Card titulo="Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
