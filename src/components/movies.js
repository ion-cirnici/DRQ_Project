import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component {

    render() {
        return this.props.movies.map((movie) => {
            {/*Reloading data */ }
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}