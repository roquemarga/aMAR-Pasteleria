import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar2 from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <ItemListContainer greeting= {"Hola! Bienvenido a MAR - Indumentaria"}/>
    </div>
  );
};

App();
export default App;
