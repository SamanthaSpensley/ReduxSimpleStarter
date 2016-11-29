import React from 'react';

// functional component
// const SearchBar = () => {
//   return <input />  // react.createElement('input')
// };

// class component allows for internal record keeping
// Define a new class and give it access to all of the functionality that React.Component class has
// all classes must have render function that returns JSX
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}

// any file that imports SearchBar has access to SearchBar component
export default SearchBar;
