import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//export to use this class elsewhere
export class MovieItem extends React.Component {

    //constructor
    constructor() {
        super();
        //this instance of DeleteMovie
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    //DeleteMovie method
    DeleteMovie(e) {
        e.preventDefault();
        console.log("Delete presser" + this.props.movie._id);
        //delete method by id from http localhost
        axios.delete('http://localhost:4000/api/movies/' + this.props.movie._id)
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
        //returning MovieItem component
        return (
            <div>
                {/*bootstarp Card */}
                <Card>
                    {/*Title */}
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/**Poster */}
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {/**Year */}
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                        {/*Delete Button on click event will call method that will go to the server findByIdAndDelete and delete record*/}
                        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
