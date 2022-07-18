import React, { useEffect, useState } from 'react';
import Usuario from './Usuario';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/users/listado')
      .then((response) => response.json())
      .then((res) => {
        setUsuarios(res);
      });
  }, []);

  return (
    <div>
      <h3>Usuarios</h3>
      <div className="contenedor">
        {usuarios.map((usuario) => (
          <Usuario datos={usuario} />
        ))}
      </div>
    </div>
  );
}
