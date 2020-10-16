import React from 'react';

//export to use this class elsewhere
export class Content extends React.Component {
    //render method
    render() {
        //returning content component
        return (
            <div>
                <h1>Home: Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );

    }

}
