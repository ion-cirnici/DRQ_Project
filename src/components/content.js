import React from 'react';
import CarPicture from '../assets/CarPic.png'

//export to use this class elsewhere
export class Content extends React.Component {
    //render method
    render() {
        //returning content component
        return (
            <div>
                <img src={CarPicture} alt="CarPic" height="100%" width="100%"></img>
            </div>
        );

    }

}
