import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartContextProvider from './context/cartContext'
import NavBar from "./components/Navbar"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { useState, createContext } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ContextApp = createContext()


function App() {

  const [state, setState] = useState({})

  function setearState(producto) {
    setState(producto)
  }

  return (
    <CartContextProvider>
    <ContextApp.Provider value={{state, setearState}}>
      <BrowserRouter>     
        <div className="App">

          <NavBar/>

            <Switch>

              <Route exact path= "/">
                <ItemListContainer greeting= {"Hola! Bienvenido a aMAR - Pastelería"}/>
              </Route>

              <Route exact path="/categoria/:idCategoria" component={ItemListContainer}/>

              <Route exact path="/detalle/:productoId" component= {ItemDetailContainer} />

              <Route exact path="/cart" component= {Cart} />


            </Switch>
        </div>
      </BrowserRouter>
    </ ContextApp.Provider>
    </CartContextProvider>
  );
};

export default App;
