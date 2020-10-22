import React from 'react';
import { MovieItem } from './movieItem';

//export to use this class elsewhere
export class Movies extends React.Component {

    //render method
    render() {
        //map function that will take a collection and will split into a sections
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie}></MovieItem>
        })
    }
}
