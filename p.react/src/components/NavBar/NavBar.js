import '../NavBar/NavBar.css'
import CartWidget from '../CartWidget/CartiWidget'
import { Link } from 'react-router-dom'

const NavBAr = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="navbar container-fluid ">
          <div className="m-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link to = '/'>
                <a id="item">Inicio</a>
                </Link>
              </li>
              <li >
              <Link to = '/category/Lampara'>
                <a id="item">Zapatillas</a>
                </Link>
              </li>

            </ul>
          </div>
          <a>
            <CartWidget />
          </a>
        </div>
      </nav>
    )
    
}

export default NavBAr