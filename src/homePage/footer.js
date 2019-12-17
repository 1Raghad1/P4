import React, { Component } from 'react'
import {Icon} from 'semantic-ui-react'
import '../homePage/homepage.css'
import { Container } from 'react-bootstrap'
export default class footer extends Component {
    render() {
        return (
            <div className='footer'>
      
            <footer class="page-footer font-small mdb-color pt-4">

           
            <div class=" container text-center text-md-left">
          
            
              <div class="d-flex justify-content-around row text-center text-md-left mt-3 pb-3">
                <hr class="w-100 clearfix d-lg-none"/>
          
                <p>  <Icon disabled name='language' /> English - US (International)</p>
                <p class="text-center text-md-left">© 2019 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/">
                      <strong>DevlancerTeam</strong>
                    </a>
                  </p>
                  <div class="col-md-5 col-lg-4 ml-lg-0">
          
                
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a class="btn-floating btn-lg rgba-white-slight mx-1">
                 <Icon disabled name='facebook' />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-lg rgba-white-slight mx-1">
                 <Icon disabled name='google plus g' />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-lg rgba-white-slight mx-1">
                 <Icon disabled name='twitter' />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-lg rgba-white-slight mx-1">
           <Icon disabled name='linkedin' />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-lg rgba-white-slight mx-1">
                  <Icon disabled name='github' />
                </a>
              </li>
            </ul>
          </div>
  
        </div>
              </div>
          
              <div class="row d-flex align-items-center">
          
                
                <div class="col-md-7 col-lg-8">
          
                
          
                </div>
               
       
                
          
              </div>
            
          
            </div>
         
          
          </footer>
          </div>
        )
    }
}
