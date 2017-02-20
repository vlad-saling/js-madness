import React from 'react';

class Greeting extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {name: 'Mary'};
      //  this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }
  
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
                <h1>Hello, {this.state.name}</h1>
            </div>
        )
    }
}

export default Greeting;



