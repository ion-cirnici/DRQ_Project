import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

//export to use this class elsewhere
export class CarItem extends React.Component {

    //constructor
    constructor() {
        super();//invoked
        //this instance of DeleteCar
        this.DeleteCar = this.DeleteCar.bind(this);
    }
    //DeleteCar method
    DeleteCar(e) {
        e.preventDefault();
        console.log("Delete presser" + this.props.car._id);
        //delete method by id from http localhost
        axios.delete('http://localhost:4000/api/cars/' + this.props.car._id)
            //callback function
            .then(() => {
                console.log('deleted client');
                this.props.ReloadData();
            })
            .catch((err) => {
                console.log("print check");
            });
    }



    //render method
    render() {
        //returning CarItem component
        return (
            <div>
                {/*bootstarp Card */}
                <Card>
                    {/*Reg */}
                    <Card.Header>{this.props.car.reg}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/**Make */}
                            <img src={this.props.car.make} width="40" height="40"></img>
                            <footer className="blockquote-footer">
                                {/**Model */}
                                {this.props.car.model}
                            </footer>
                        </blockquote>
                        {/*Delete Button on click event will call method that will go to the server findByIdAndDelete and delete record*/}
                        <Button variant="danger" onClick={this.DeleteCar}>Delete</Button>
                        {/*Link to car referencing on the unique identifier ID*/}
                        <Link to={"/edit/" + this.props.car._id} className="btn btn-primary">Edit</Link>
                    </Card.Body>
                </Card>
            </div>
        );//return End
    }//render End
}//class CarItem End
