import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import tab from './tab.scss';


class Tab extends React.Component {
  // static propTypes = {
  //   postUrl: PropTypes.string,
  //   findPasswordUrl: PropTypes.string,
  //   registerUrl: PropTypes.string
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="html" >
        <div className="title">FT中文网</div>
      </div>
    );
  }

}

export default Tab;