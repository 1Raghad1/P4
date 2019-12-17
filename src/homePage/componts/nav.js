import React, { Component } from 'react'
import {Icon  } from 'semantic-ui-react';
import { Navbar,NavDropdown,FormControl,Form , Button ,Nav, Container} from 'react-bootstrap'
import '../homepage.css'
export default class MenuExampleHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
     
        <Navbar  expand="lg">
  <Navbar.Brand href="/">   <img
        src="https://i.ibb.co/bg7wqS9/Screen-Shot-1441-04-18-at-1-09-22-AM.png"
        width="150px"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/profile"><Icon  disabled name='user outline'/></Nav.Link>
      <Nav.Link href="/link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      </div>
    )
  }
}