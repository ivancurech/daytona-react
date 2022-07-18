import React from 'react';

export default function Carro({ datos }) {
  return (
    <div className="carro-tarjeta">
      <h4>{datos.name}</h4>
      <p className="carro-descripcion">{datos['ficha-tecnica']}</p>
      <p>${datos.precio}</p>
      <p>{datos.descuento}% OFF</p>
    </div>
  );
}
