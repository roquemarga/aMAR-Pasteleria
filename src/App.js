import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { createContext } from 'react'
import { useState } from 'react'

export const ContextApp = createContext()


function App() {

  const [state, setstate] = useState(initialState)
  return (
    <ContextApp.Provider value={state}>
      <BrowserRouter>     
        <div className="App">

          <NavBar/>

            <Switch>

              <Route exact path= "/">
                <ItemListContainer greeting= {"Hola! Bienvenido a aMAR - Pastelería"}/>
              </Route>

              <Route exact path="/categoria/:idCategoria" component={ItemListContainer}/>

              <Route exact path="/detalle/:id" component= {ItemDetailContainer} />

              <Route exact path="/cart" component= {Cart} />


            </Switch>
        </div>
      </BrowserRouter>
    </ ContextApp.Provider>

  );
};

export default App;
