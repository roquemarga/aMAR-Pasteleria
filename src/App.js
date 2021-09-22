import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {
  return (
    <BrowserRouter>     
      <div className="App">

        <NavBar/>

          <Switch>

            <Route exact path= "/">
              <ItemListContainer greeting= {"Hola! Bienvenido a aMAR - Pastelería"}/>
            </Route>

            <Route exact path="/categoria/:idCategoria" component={ItemListContainer}/>

            <Route exact path="/detalle/:id" component= {ItemDetailContainer} />

          </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
