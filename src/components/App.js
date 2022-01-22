//1.COMPONENTES FUNCIONALES

//A. IMPORTACIONES

import './../styles/App.css';
import Foco from './Foco';
//B FUNCIONES(COMPONENTE)
function App() {
  
  //JSX -FORMATO PARA PODER UTILIZAR JAVASCRIPT Y HTML SIMULTANEO
  return (
    <div id='techo'>
      <Foco/>
      <Foco/>
    </div>
  );
}
      
//C. EXPORTACION
export default App;
