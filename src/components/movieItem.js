import React from 'react';
import Card from 'react-bootstrap/Card';

//export to use this class elsewhere
export class MovieItem extends React.Component {

    //render method
    render() {
        //returning MovieItem component
        return (
            <div>
                {/**bootstarp Card */}
                <Card>
                    {/**Title */}
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/**Poster */}
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {/**Year */}
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
