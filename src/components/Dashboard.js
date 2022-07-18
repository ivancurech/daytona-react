import React from 'react';
import Compras from './Compras';
import Recomendado from './Recomendado';
import Usuarios from './Usuarios';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Usuarios />
      {/* <Compras /> */}
      <Recomendado />
    </div>
  );
}
