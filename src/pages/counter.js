import React from "react";
import Link from 'gatsby-link';

export default class Counter extends React.Component {

    constructor(props){
        super(props);
        // this.handleIncrement = this.handleIncrement.bind(this);
        // this.handleDecrement = this.handleDecrement.bind(this);

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => { console.warn('increment');
        this.setState( (prevState) => {
            return {count: prevState.count + 1};
        })
    };

    handleDecrement = () => { console.info('decrement');
        this.setState( (prevState) => {
            return {count: prevState.count - 1};
        })
    };

    render(){
        return (
            <div>
                <h1>Counter</h1>
                <p>current count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>plus</button>
                <button onClick={this.handleDecrement}>minus</button>
            </div>
        );
    }
}