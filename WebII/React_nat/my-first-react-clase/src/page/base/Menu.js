import { Link, useLocation } from 'react-router-dom'
import MyRouters from '../../router/router'
import '../../styles/menu.css'

export default function Menu()
{
    const location = useLocation();
    const restringidos = ["/login"];

    const notAllowed = restringidos.indexOf(location.pathname) === -1;

    return (
        <div className="App">
            {(notAllowed && 

            <header>
            <nav>
              <ul className='nav-list'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li><Link to="/login">Login</Link></li> */}
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/product-details">Product Details</Link></li>
              </ul>

              <div className='Carrito'>
                <ul className='nav-list'>
                  <li><Link to="/carrito">Carrito 🛒</Link></li>
                </ul>
              </div>

            </nav>          

             </header>
            
            )}
            
            <MyRouters/>
        </div>
    )
}