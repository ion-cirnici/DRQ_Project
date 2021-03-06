import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'; // import button from bootstrap

//export to use this class elsewhere in this case inherits from React.Component
export class ToDoList extends React.Component {

    //constructor
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeAddNote = this.onChangeAddNote.bind(this); // tide when called, this keyword will set to the provided value
       

        this.state = { // will store property values that belongs to the component
            note: ''
          
        }
    }// END constructor

    onChangeAddNote(e) {
        this.setState({ note: e.target.value }); //update method and invoke state
    }// END onChangeAddNote

   
    onSubmit() { // event occurs when a form is submitted
        alert('Note added' // alert pops up with Note
            + '\note:  ' + this.state.note);

        const newNote = { // newNote object
            note: this.state.note
        }

        axios.post('http://localhost:4000/api/notes', newNote) // read data/send object to server
            .then((res) => {
                console.log(res); // responce positive
            })
            .catch((err) => {
                console.log(err); //response error
            });
    }// end onSubmit

    render() { // method which tells react what to display
        return ( //output of the method
            <div>
                <h3>AddNote</h3>
                <form onSubmit={this.onSubmit}> {/* form which is used to collect user input*/}
                   
                    <div className="form-group">
                      
                        <textarea type="text" className="form-control" value={this.state.note} onChange={this.onChangeAddNote}></textarea>
                    </div> {/* form-control - Bootstrap’s form styles */}
                    
                    
                    <Button variant="outline-info" type="submit">Add Note</Button>
                </form>
            </div>
        );// end return
    }// end render
}
