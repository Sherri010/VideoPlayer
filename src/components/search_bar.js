
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    //when ever the user enters something new in the field,
    //this will be updated
    this.state = { term:'cats'};
  }

  render(){

    //must return jsx
    return (
      <div className="search_bar">
        <input
          value={this.state.term}
          onChange = { event => this.onInputChange(event.target.value)} autoFocus/>
    </div>
    );
    //return <input onChange={this.onInputChange} />;
    // <input onChange={ (event) => console.log(event.target)} />;
    // <input onChange={ event => console.log(event.target)} />;
  }

  onInputChange(term){
    this.setState({term});
    this.props.OnSearchTermChange(term);
  }
}

export default SearchBar;
