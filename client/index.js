import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Tab from './component/tab/tab.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }

  render() {
    return (
    	<div>
        <Tab />
   
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
