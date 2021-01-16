import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import transparentLogo from './assets/transparentLogo.png';//loge importing

//importing Navbar and Nav for Navigation from react bootstrap
import { Navbar, Nav } from 'react-bootstrap';

//import from react-router-dom the BrowserRouter, switch statement for swiching between different components and Route
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddCars } from './components/addCars';
import { AllCars } from './components/allCars';
import { Edit } from './components/edit';

//class App that extends and will import class from react called Component
class App extends Component {
  // render method with no arguments and will wrap entire return
  render() {
    return (
      //BrowserRouter that is used as Router (line 13) that is wrapping the entire div element
      <Router>
        <div className="App">
        <Navbar bg="secondary" variant="dark">
          <Navbar.Brand href="/"><img src={transparentLogo} alt="logo" height="60" width="60"/></Navbar.Brand>
            <Nav className="mr-auto">
              {
                //another way to add Comment for multilines
              }
              {/*change the url to required*/}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/allCars">All Cars</Nav.Link>
              <Nav.Link href="/addCars">Add Cars</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          {
            //Route and the path that is specify the url that is going to be
            //In this case Content component and the path has to be exact for displaying the component
          }
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/addCars' component={AddCars} />
            <Route path='/allCars' component={AllCars} />
            <Route path='/edit/:id' component={Edit}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
