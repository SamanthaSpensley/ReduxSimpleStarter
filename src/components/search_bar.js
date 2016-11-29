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
  // initialize state; constructor function called automatically whenever new instance of component is called
  constructor(props) {
    // super refers to parent method
    super(props);

    this.state = { term: '' };
  }

  render() {
    // always manipulate state with this.setState!!
    return (
      <div>
        {/* this.setState rerenders component on each event */}
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

// any file that imports SearchBar has access to SearchBar component
export default SearchBar;
