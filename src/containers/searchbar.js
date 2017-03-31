import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
            // term refers to the Search term
    this.state = { term: ''};
                        // this, is our instance of SearchBar, 
                        // has a function called onInputChange
                        // bind that function to this, which is SearchBar
                        // and replace onInputChange with this new bound instance of this function
                        // Overring the LHS (left hand side value)
     this.onInputChange = this.onInputChange.bind(this);
     this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Need to fetch Weather Data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);


