import React, { Component,  cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// 第一、二、三个tab内容
class TabPane extends React.Component {
// classPrefix为tabs，这是从哪里传过来的？

  render() {
    const { classPrefix, className, isActive, children } = this.props;

    const classes = classnames({
      [className]: className,
      [`${classPrefix}-panel`]: true,
      [`${classPrefix}-active`]: isActive,
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
    isActive: PropTypes.bool
  };
export default TabPane;