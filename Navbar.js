import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import'./Style.css';
import App from './App';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <>

            <nav className='navbar'>
              <a >Portfolio</a>  


            
                  <ul className='menu'>

                  <li><Link to='/home'>Home</Link></li>
                      <li><Link to='/achievement'>Achievement</Link></li>
                      
                      <li><Link to= '/Education'>Education</Link></li>
                      <li><Link to= '/contact'>Contact</Link></li>
                      
                  </ul>
              

            </nav>

            </>
         );
    }
}
 
export default Navbar;