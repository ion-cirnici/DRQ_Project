import React from 'react';
import axios from 'axios';

//export to use this class elsewhere in this case inherits from React.Component
export class Edit extends React.Component {

    //Constructor Start
    constructor() {
        super();
        //all events need to be bind
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeReg = this.onChangeReg.bind(this);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        //state set to blank
        this.state = {
            Reg: '',
            Make: '',
            Model: ''
        }
    }//Constructor End

    componentDidMount() {
        console.log(this.props.match.params.id);
        //get request that is envoking app.get method from server.js finding document by its id which is passing part of the url and returning
        axios.get('http://localhost:4000/api/cars/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    //data based on the request for display
                    _id: response.data._id,
                    Reg: response.data.reg,
                    Make: response.data.make,
                    Model: response.data.model
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    //Method onChangeReg with argument (e) and when value changes will update the state
    onChangeReg(e) {
        this.setState({
            Reg: e.target.value
        });
    }
    //onChangeMake Method
    onChangeMake(e) {
        this.setState({
            Make: e.target.value
        });

    }
    //onChangeModel Method
    onChangeModel(e) {
        this.setState({
            Model: e.target.value
        })
    }
    //onSubmit Method
    onSubmit(e) {
        e.preventDefault();
        alert("Car: " + this.state.Reg
            + " " + this.state.Make
            + " " + this.state.Model);
        const newCar = {
            reg: this.state.Reg,
            make: this.state.Make,
            model: this.state.Model,
            _id: this.state._id
        }
        //passing up the new object: newCar
        axios.put('http://localhost:4000/api/cars/' + this.state._id, newCar)
            .then(res => {
                console.log(res.data)
            })
            .catch();

    }

    //Render method
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    {/*Label Car Add Car Reg */}
                    <div className="form-group">
                        <label>Edit Registration :</label>
                        <input type='text'
                            className='form-control'
                            //Methods initial value and onChange event onChangeReg
                            value={this.state.Reg}
                            onChange={this.onChangeReg}></input>
                    </div>
                    {/*Label Car Year with input text */}
                    <div className="form-group">
                        <label>Edit Make: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Make}
                            onChange={this.onChangeMake}></input>
                    </div>
                    {/*Label Car Model with input text */}
                    <div className='form-group'>
                        <label>Edit Model: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Model}
                            onChange={this.onChangeModel}>

                        </textarea>
                    </div>
                    {/*Adit Car Button */}
                    <div className="form-group">
                        <input type='submit'
                            value='Edit Car'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
