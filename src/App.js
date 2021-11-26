import React from 'react';
//import Contador from './components/Contador'
// import EjemploUno from './components/EjemploUno';
// import Formulario from './components/Formularios/Formulario';
// import FormularioHook from './components/Formularios/FormularioHook';
// import Saludo from './components/components and props/Saludo';
// import Comentario from './components/components and props/Comentario';
/*import Jsx from './components/Jsx';
import Lista from './components/Lista';*/


//IMPORTACIÓN PARA LAS RUTAS
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Civilization from './components/Components routes/Civilization';
import Contacto from './components/Components routes/Contacto';
import Inicio from './components/Components routes/Inicio';
import Nosotros from './components/Components routes/Nosotros';

// function App() {

//   {/* este pedazo de còdigo va de la mano con los props: */}
//     const sujeto1 = {
//       nombre: "Pableto",
//       urlImagen: "https://via.placeholder.com/64",
//       descripcion: 'A pableto le gusta comer empanadas'
//     }

//     const sujeto2 = {
//       nombre: "Rauleto",
//       urlImagen: "https://via.placeholder.com/32",
//       descripcion: 'A rauleto le gusta comer arepas'
//     }

//   return (
//     <div className = "container mt-5">
//       {/*<Formulario/>*/}
//       {/*<FormularioHook/>*/}
//       {/*<EjemploUno/>*/}

//       {/*Esto se llama props, es la comunicación entre componentes y sus propiedades y ayuda a la reutilizacion de estos:*/}
//         <Saludo persona="Pableto" edad={25}/>
//         <Saludo persona="Rauleto"/>
//         <Comentario sujeto={sujeto1}/>
//         <Comentario sujeto={sujeto2}/>

//     </div>
//   );
// }

//PARA LAS RUTAS
function App(){
  //Para ello hay que instalar el router en la terminal con npm install react-router-dom@5.2.0, la pagina oficial se llama react router
  return(
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/Inicio" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          {/* El active class name lo que hace que el botòn de manera dinamica cuando estemos en el se ponga de un color negro
          más oscuro esto solo funciona con NavLink y la clase active de boostrap*/}
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
        </div>
        <hr/>
        <Switch> {/*El contenido dinamico que queramos generar va dentro del switch, vamos desde el màs especifico hasta lo más general, de lo contrario se pone el exact*/}
          <Route path="/nosotros/:id">
            <Civilization/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
          <Route path="/" exact>
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
