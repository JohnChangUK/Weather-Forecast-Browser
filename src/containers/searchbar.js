import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
                        // this, is our instance of SearchBar, 
                        // has a function called onInputChange
                        // bind that function to this, which is SearchBar
                        // and replace onInputChange with this new bound instance of this function
                        // Overring the LHS (left hand side value)
     this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input 
            placeholder="Get a five day forecast in your city"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      );
  }
}