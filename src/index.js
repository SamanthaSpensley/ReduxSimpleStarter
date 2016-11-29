// writing Component/views are snippets of code that produce html
// nest Components to make complex apps relatively simple

// react create and manage components
// reactDOM interacts with DOM
import React from 'react';
import ReactDOM from 'react-dom';


// Create new component that will produce some html
// return JSX (subset of JS)
const App = () => {
  return <div>Hi!</div>
}

// Take component's generated HTML and put in the DOM
// (App) = class of component; (<App />) = instance of component
// document.querySelector('container') targets DOM node 'container' from index.html
ReactDOM.render(<App />, document.querySelector('.container'));
