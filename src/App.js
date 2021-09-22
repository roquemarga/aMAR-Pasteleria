import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting= {"Hola! Bienvenido a aMAR - Pastelería"}/>
      <ItemDetailContainer />
    </div>
  );
};

export default App;
