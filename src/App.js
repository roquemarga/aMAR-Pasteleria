import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartForm from './components/CartForm'
import CartContextProvider from './context/cartContext'
import NavBar from "./components/Navbar"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {



  return (
    <CartContextProvider>
      <BrowserRouter>     
        <div className="App">

          <NavBar/>

            <Switch>

              <Route exact path= "/">
                <ItemListContainer greeting= {"aMAR - Pastelería"}/>
              </Route>

              <Route exact path="/categoria/:idCategoria" component={ItemListContainer}/>

              <Route exact path="/producto/:id" component= {ItemDetailContainer} />

              <Route exact path="/cart" component= {Cart} />

              <Route exact path="/CartForm" component= {CartForm} />



            </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
