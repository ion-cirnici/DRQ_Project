import React from 'react';
import { CarItem } from './carItem';


export class Cars extends React.Component {

    render() {
        return this.props.cars.map((car) => {
            {/*Reloading data */ }
            return <CarItem car={car} ReloadData={this.props.ReloadData}></CarItem>
        })
    }
}