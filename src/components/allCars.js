import React from 'react';
import { Cars } from './cars';
import axios from 'axios';

//export to use this class elsewhere
export class AllCars extends React.Component {

    //Object state that contains object cars
    state = {
        //object cars
        cars: []
    };
    //constructor that will be called by delete method
    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);

    }
    //ReloadData method that will go of on the database and get all cars from the database
    ReloadData() {
        axios.get('http://localhost:4000/api/cars')
            .then(
                //Anonimous Method that will take the response path and will update the array cars with returned data 
                (response) => {
                    this.setState({ cars: response.data })
                })
            //if problem then catch will display error
            .catch((error) => {
                console.log(error)
            });
    }
    //Method that its called everytime that component is become active in the view
    componentDidMount() {
        //axios will go and get, or retrieve some information about resourse
        axios.get('http://localhost:4000/api/cars')
            .then(
                //Anonimous Method that will take the response path and will update the array cars with returned data 
                (response) => {
                    this.setState({ cars: response.data })
                })
            //if problem then catch will display error
            .catch((error) => {
                console.log(error)
            });

    }

    //render method
    render() {
        //returning All CArs Component
        return (
            <div>
                <h1>All Cars</h1>
                {/*embed the car Component and inside curley brackets pass cars as a part of object cars */}
                <Cars cars={this.state.cars} ReloadData={this.ReloadData}></Cars>
            </div>
        );
    }
}
