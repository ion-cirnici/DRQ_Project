import React from 'react';
import axios from 'axios';

//export to use this class elsewhere in this case inherits from React.Component
export class AddNewCar extends React.Component {

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
            model: this.state.Model
        };
        //method post wich send's data to the server using post url and passing the newCar object 
        axios.post('http://localhost:4000/api/cars', newCar)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    //Render method
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    {/*Label Car Add Car Title */}
                    <div className="form-group">
                        <label>Add Registration Number:</label>
                        <input type='text'
                            className='form-control'
                            //Methods initial value and onChange event onChangeTitle
                            value={this.state.Reg}
                            onChange={this.onChangeReg}></input>
                    </div>
                    {/*Label Cars Make with input text */}
                    <div className="form-group">
                        <label>Add Make: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Make}
                            onChange={this.onChangeMake}></input>
                    </div>
                    {/*Label Car Poster with input text */}
                    <div className='form-group'>
                        <label>Add Model: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Model}
                            onChange={this.onChangeModel}>

                        </textarea>
                    </div>
                    {/*Add Car Button */}
                    <div className="form-group">
                        <input type='submit'
                            value='Add Car'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
