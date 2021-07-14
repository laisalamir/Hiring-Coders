import React, { useState } from 'react';


function App(props) {
  const usuario = useState('Laisa')
  return (
    <>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuario" />
    </>
  );
}

export default App;

// [usuario, setUsuario]
