import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';

//importing Navbar and Nav for Navigation from react bootstrap
import { Navbar, Nav } from 'react-bootstrap';

//import from react-router-dom the BrowserRouter, switch statement for swiching between different components and Route
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//class App that extends that will import class from react called Component (Line 1)
class App extends Component {
  // render method with no arguments and will wrap entire return
  render() {
    return (
      //BrowserRouter that is used as Router (line 13) that is wrapping the entire div element
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">

              {
                //another way to add Comment
              }
              {/*change the url to required*/}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          {
            //Route and the path that is specify the url that is going to be
            //in this case Content component and the path has to be exact for displaying the component
          }
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Header} exact />
            <Route path='/read' component={Footer} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
