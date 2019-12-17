import React, { Component } from 'react'
import Nav from './homePage/componts/nav'
import {
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom";
import Up from '../src/addPost/UploadForm'
import HomePage from './homePage/componts/homepage'
import addProject from './addPost/addPost'
import FreelancerProfile from './freelancer/FHome'
import Checkout from './checkout/Checkout'
import Login from "./containers/Login";
import axios from 'axios'
// import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import Chat from './chat/Chat/Chat'
import Join from './chat/Join/Join'
import FHome from './freelancer/FHome';
export default class App extends Component {
  constructor(props) {
    super(props)
  this.state ={
    name:'raghad'
  }
}
  render() {
    return (
      <>
   <Nav/>
   {/* <FHome/> */}
   < BrowserRouter >
   <Switch>
   <Route exact path="/" exact component={HomePage} />
      <Route path={"/fhome"} render={(props)=>this.state.data!==null  ? <FHome  {...props} data={this.state.name} />:null} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
      </Switch>
    </ BrowserRouter >
   
   {/* <FreelancerProfile/> */}
   {/* <BrowserRouter>
    <Switch>
<Route exact path='/' component={HomePage} />
    <Route exact path='/addProject' component={addProject} />
<Route exact path='/profile' component ={FreelancerProfile} />
<Route exact path = '/checkout' component ={Checkout} />
    </Switch>
    </BrowserRouter> */}
      </>
    )
  }
}
