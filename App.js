import React, { Component } from 'react';
import'./Style.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import achievement  from './Achievement'

import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import Education from './Education';




class App extends Component {
    state = {  }
    render() { 

        return ( 
<div>
        <Navbar/>

<switch>
<Route path="/" component={Home} exact/>
                <Route path="/home" component={Home} exact/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact}/>
                <Route path="/achievement" component={achievement}/>
                <Route path="/education" component={Education}/>
               
        </switch>        
            </div>
         
    
             );
    }
}
 
export default App;