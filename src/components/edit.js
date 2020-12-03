import React from 'react';
import axios from 'axios';

//export to use this class elsewhere in this case inherits from React.Component
export class Edit extends React.Component {

    //Constructor Start
    constructor() {
        super();
        //all events need to be bind
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        //state set to blank
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }//Constructor End

    componentDidMount() {
        console.log(this.props.match.params.id);
        //get request that is envoking app.get method from server.js finding document by its id which is passing part of the url and returning
        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    //data based on the request for display
                    _id: response.data._id,
                    Title: response.data.title,
                    Year: response.datayear,
                    Poster: response.data.poster
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    //Method onChangeTitle with argument (e) and when value changes will update the state
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    //onChangeYear Method
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });

    }
    //onChangePoster Method
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }
    //onSubmit Method
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title
            + " " + this.state.Year
            + " " + this.state.Poster);
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }
        //passing up the new object: newMovie
        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
            .then(res => {
                console.log(res.data)
            })
            .catch();

        // //method post wich send's data to the server using post url and passing the newMovie object 
        // axios.post('http://localhost:4000/api/movies', newMovie)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     });
    }

    //Render method
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    {/*Label Movie Add Movie Title */}
                    <div className="form-group">
                        <label>Add Movie Title:</label>
                        <input type='text'
                            className='form-control'
                            //Methods initial value and onChange event onChangeTitle
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    {/*Label Movie Year with input text */}
                    <div className="form-group">
                        <label>AddMovie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    {/*Label Movie Poster with input text */}
                    <div className='form-group'>
                        <label>Movie Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>

                        </textarea>
                    </div>
                    {/*Adit Movie Button */}
                    <div className="form-group">
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
