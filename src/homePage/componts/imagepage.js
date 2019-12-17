import React, { Component } from 'react'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import addProject from '../../addPost/addPost'
import {Image, Container,Button} from 'react-bootstrap'
import '../homepage.css'
export default class imagepage extends Component {
  render() {
    return (
      <div>
      <Container>
        <Image  className ='view' src='https://cdn.pixabay.com/photo/2017/08/10/08/28/mac-2619994_960_720.jpg' />
<div className="btnhome">
<h1 style={{fontSize:"35px" , }} >
<strong>
Hire expert freelancers for any job, online<br/></strong></h1>
<p style={{marginLeft:"7%"}}>Millions of small businesses use Freelancer to turn their ideas into reality.</p>

<Button style={{marginLeft:"15%" , width: "150px"}} variant="success"  size="lg" href='/addProject'> Hire</Button>
<Button style={{marginLeft:"15px",width: "150px"}} variant="outline-success"  size="lg" >Work</Button>
</div>
        </Container>
        <BrowserRouter>
        <Switch>
        <Route exact path='/addProject' component={addProject} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
