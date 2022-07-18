import React, { useEffect, useState } from 'react';
import Carro from './Carro';

export default function Compras() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/carros/comprados')
      .then((response) => response.json())
      .then((res) => {
        setCarros(res);
      });
  }, []);

  return (
    <div>
      <h3>Comprados</h3>

      <div className="contenedor">
        {carros.map((carro) => (
          <Carro datos={carro} />
        ))}
      </div>
    </div>
  );
}
