import React from 'react';

export default function Usuario({ datos }) {
  return (
    <div className="usuario-tarjeta">
      <h4>{datos.name}</h4>
      <p>{datos.email}</p>
    </div>
  );
}
