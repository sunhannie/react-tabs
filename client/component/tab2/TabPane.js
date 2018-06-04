import React, { Component, cloneElement } from 'react';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './style.scss';

// @immutableRenderDecorator
// @CSSModules(styles, { allowMultiple: true })
class TabPane extends Component {


  render() {
    const { className, isActive, children } = this.props;

    const classes = classnames({
      panel: true,
      contentActive: isActive,
    });

    return (
      <div
        role="tabpanel"
        className={classes}
        aria-hidden={!isActive}>
        {children}
      </div>
    );
  }
}

  TabPane.propTypes = {
    tab: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
    order: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    isActive: PropTypes.bool,
  };
export default TabPane;