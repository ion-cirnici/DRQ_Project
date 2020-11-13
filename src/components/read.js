import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

//export to use this class elsewhere
export class Read extends React.Component {

    //Object state that contains object movies
    state = {
        //object movies
        movies: []
    };
    //Method that its called everytime that component is become active in the view
    componentDidMount() {
        //axios will go and get, or retrieve some information about resourse
        axios.get('http://localhost:4000/api/movies')
            .then(
                //Anonimous Method that will take the response path and will update the array movies with returned data 
                (response) => {
                    this.setState({ movies: response.data.movies })
                })
            //if problem then catch will display error
            .catch((error) => {
                console.log(error)
            }

            );

    }
    //render method
    render() {
        //returning Read Component
        return (
            <div>
                <h1>Read: This is the Read Component.</h1>
                {/*embed the movie Component and inside curley brackets pass movies as a part of object movies */}
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
