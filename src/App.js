import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting= {"Hola! Bienvenido a aMAR - Pastelería"}/>
    </div>
  );
};

export default App;
