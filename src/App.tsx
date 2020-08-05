import React from 'react'; // É necessário importar a lib react sempre, mesmo que não for utilizada.
import './assets/styles/global.css'
import Landing from './pages/Landing';
// JSX = Javascript + XML
// Componentes = São funções que importamos dentro da DOM.

function App() {
  return (
  <Landing/>
  );
}

export default App;