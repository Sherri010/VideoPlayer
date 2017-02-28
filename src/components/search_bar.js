
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    //when ever the user enters something new in the field,
    //this will be updated
    this.state = { term:' '};
  }

  render(){

    //must return jsx
    return (
      <div>
        <input onChange = { event => this.setState({term: event.target.value})} />;
        value of input: {this.state.term}
    </div>
    );
    //return <input onChange={this.onInputChange} />;
    // <input onChange={ (event) => console.log(event.target)} />;
    // <input onChange={ event => console.log(event.target)} />;
  }

  onInputChange(event){
    console.log(event.target.value);
  }
}

export default SearchBar;
