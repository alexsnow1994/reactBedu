//1.COMPONENTES FUNCIONALES

//A. IMPORTACIONES

import './../styles/App.css';
import FilaFocos from './FilaFocos';
import FocoMercurial from './FocoMercurial';
import Libros from './Libros';
import Peliculas from './Peliculas';
import Videojuegos from './Videojuegos';


//B FUNCIONES(COMPONENTE)
function App() {
  
  //JSX -FORMATO PARA PODER UTILIZAR JAVASCRIPT Y HTML SIMULTANEO
  return (
    <>
    <div id='techo'>
      <FocoMercurial/>
      <FilaFocos/>
      <FocoMercurial/>
      <hr/>
      <Peliculas/>
      <section>
      <Libros/>
      </section>
      <hr/>
      <Videojuegos/>
    </div>
    </>
  );
  
}
      
//C. EXPORTACION
export default App;
