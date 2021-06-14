import logo from './assets/images/logo.svg';
import './assets/css/App.css'; 

// Importar Componentes
import MiComponente from './components/MiComponente'; 

function HolaMundo(nombre, edad) {
                    // Si vas a guardar varias etiquetas tienes que encapsular. 
  var presentacion = (
    <div>  
      <h2> Hola soy {nombre} </h2>
      <h3> Tengo {edad} años </h3>
    </div> 
  );
  return presentacion; 
}

function App() {
  var nombre = "Antonio"; 
  // var presentacion = <h2> Hola soy {nombre} </h2>
  // var hello = alert("Hello world!!");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello World!
        </p>
        {/* {alert("Hello world!!")} */}
        {/* {presentacion} */}
        {/* {hello} */} 

        {HolaMundo(nombre, 24)}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */} 
      </header>
      <section className="componentes">
        <MiComponente/>
        
      </section>

    </div>
  );
}

export default App;
