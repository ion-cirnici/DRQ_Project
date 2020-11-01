import React from 'react';

//export to use this class elsewhere in this case inherits from React.Component
export class Create extends React.Component {

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
                    {/*Add Movie Button */}
                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
