import React, { Component } from 'react';
import'./Style.css';

import App from './App';



class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
             <div className="contact">
                 <div className="w">
                <div className="container col-3 w">
            <div class="card" >
                <div class="card-body">
                    <img alt="logo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0/1590003577120?e=2159024400&v=beta&t=CtsDFVp0TAdwyg73A8F82MohzKpAQy-pUGA13atPG6A" className="email"/><br></br>
                    <a  className="btn"  href="https://www.linkedin.com/in/prince-kumar-0630081a9" class="btn btn btn-info" role="button"  class="btn btn-danger btn-block" > linkedin</a>

                   
                    </div>       
</div>
                  
                  
                 
        </div>    
     
      <div className='m'>
      <div className="container col-3">
          
      <div class="card" >
          <div class="card-body">
              <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtw_DSi-0pM9wTPIIcc5jZ2E_f3gms9Iiijg&usqp=CAU" className="email"/><br></br>
              <a className="btn2" href="mailto:princekumr20@gmail.com" class="btn btn btn-info" role="button" class="btn btn-danger btn-block" > Gmail </a>

              </div>
            </div>
              
           
           
         </div>

             <div className=' '>
      <div className="container col-3">
          
      <div class="card" >
          <div class="card-body">
              <img alt="logo" src="https://www.pngkey.com/png/detail/955-9558163_transparent-github-logo.png" className="email"/><br></br>
              <a className=" " href="https://github.com/" class="btn btn btn-info" role="button" class="btn btn-danger btn-block"  > Gitub</a>

               </div>
           
            </div>
            </div>
        </div>
     
       
       </div>
       </div>
       </div> 
            
            
  </div>          
         
         
         
        
         
      
    
  



         );
    }
}
 
export default Contact;