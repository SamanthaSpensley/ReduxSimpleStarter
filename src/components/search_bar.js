import React, { Component } from 'react';
// same thing as const Component = React.Component

// functional component
// const SearchBar = () => {
//   return <input />  // react.createElement('input')
// };

// class component allows for internal record keeping
// Define a new class and give it access to all of the functionality that React.Component class has
// all classes must have render method that returns JSX
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // always manipulate state with this.setState!!
    return (
      <div className="search-bar">
        {/* this.setState rerenders component on each event */}
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term)
  }
}

// any file that imports SearchBar has access to SearchBar component
export default SearchBar;
