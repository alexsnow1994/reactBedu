//1.COMPONENTES FUNCIONALES

//A. IMPORTACIONES

import './../styles/App.css';
import FilaFocos from './FilaFocos';
import FocoMercurial from './FocoMercurial';


//B FUNCIONES(COMPONENTE)
function App() {
  
  //JSX -FORMATO PARA PODER UTILIZAR JAVASCRIPT Y HTML SIMULTANEO
  return (
    <div id='techo'>
      <FocoMercurial/>
      <FilaFocos/>
      <FocoMercurial/>
    </div>
  );
}
      
//C. EXPORTACION
export default App;
