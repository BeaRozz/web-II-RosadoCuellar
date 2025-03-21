import logo from './logo.svg';
// import './App.css';
import MyFirstComponent from './components/MyFirstComponent';
import Form from './components/Form/Form';
import Profile from './components/Profile';
import { Link } from 'react-router-dom';
import MyRouters from './router/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/login">LogIn</Link></li>
            <li><Link to="/products">Productos</Link></li>
          </ul>
        </nav>
      </header>
      <MyRouters />
    </div>
  );
}

export default App;
