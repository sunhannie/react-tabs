import React, { Component, cloneElement } from 'react';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './style.scss';

// @immutableRenderDecorator
// @CSSModules(styles, { allowMultiple: true })
/**
 * {children}:
 {children: "第一个 Tab 里的内容"}
 {children: "第二个 Tab 里的内容"}
 {children: "第三个 Tab 里的内容"}
this.props.tab
 {tab: "Tab 1"}
 {tab: "Tab 2"}
 {tab: "Tab 3"}
 {order}:
 {order: "0"}
 {order: "1"}
 {order: "2"}
 */
class TabPane extends Component {


  render() {
    const { className, isActive, children,order } = this.props; //值从app.js中来

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
export default TabPane;  //在app.js中使用
// export default CSSModules(TabPane, style);