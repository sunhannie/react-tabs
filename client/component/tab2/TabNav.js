import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import { Motion, spring } from 'react-motion';
import InkBar from './InkBar';
import style from './style.scss';

function getOuterWidth(el) {
  return el.offsetWidth;
}

function getOffset(el) {
  const html = el.ownerDocument.documentElement;
  const box = el.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset - html.clientTop,
    left: box.left + window.pageXOffset - html.clientLeft,
  };
}


class TabNav extends Component {


  constructor(props) {
    super(props);
    this.myRef = 1;
    // console.log(React.createRef());

    this.state = {
      inkBarWidth: 0,
      inkBarLeft: 0,
    };
  }

  componentDidMount() {
    const { activeIndex } = this.props;
    const node = ReactDOM.findDOMNode(this);
    const el = node.querySelectorAll('li')[activeIndex];

    this.setState({
      inkBarWidth: getOuterWidth(el),
      inkBarLeft: getOffset(el).left,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeIndex !== this.props.activeIndex) {
      const { activeIndex } = this.props;
      const node = ReactDOM.findDOMNode(this);
      const el = node.querySelectorAll('li')[activeIndex];

      this.setState({
        inkBarWidth: getOuterWidth(el),
        inkBarLeft: getOffset(el).left,
      });
    }
  }

/**
 * // Warning: TabNav: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. 
 * key因为不是对象，所以显示以上提醒
 * 
 * panels：
 * ArraySeq {_array: Array(3), size: 3}size: 3_array: Array(3)0: {$$typeof: Symbol(react.element), type: ƒ, key: null, ref: null, props: {…}, …}1: {$$typeof: Symbol(react.element), type: ƒ, key: null, ref: null, props: {…}, …}2: {$$typeof: Symbol(react.element), type: ƒ, key: null, ref: null, props: {…}, …}length: 3__proto__: Array(0)__proto__: IndexedIterable

activeIndex：0

order：0 1 2
 */

  getTabs() {
    const { onTabClick,panels, activeIndex } = this.props;  //从Tabs.js来
     
    const rst = [];

    return panels.map((child) => {
      if (!child) { return; }

      const order = parseInt(child.props.order, 10);

      let classes = classnames({
        tab: true,
        tabActive: activeIndex === order,
        disabled: child.props.disabled,
      });

      let events = {};
      if (!child.props.disabled) {
        // console.log( child );
        events = {
          onClick: this.props.onTabClick.bind(this, order),
        };
      }

      const ref = {};
      if (activeIndex === order) {
        
        // ref.ref = 'activeTab';
      }
      // 获取从Tabs传过来的child的props，返回一些标签
      return (
        <li
          role="tab"
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          aria-selected={activeIndex === order? 'true' : 'false'}
          {...events}
          className={classes}
          key={order}
          {...ref}
         
        >
          {child.props.tab} 
        </li>
      );
    });
  }

  render() {
    const { activeIndex } = this.props;

    const rootClasses = classnames({
      bar: true,
    });

    const classes = classnames({
      nav: true,
    });
 
 {/*{this.getTabs()}把获得的标签引入TabNav组件中   */}  
    return (

      <div className={rootClasses} role="tablist">
        <Motion style={{ left: spring(this.state.inkBarLeft) }}>
          {({ left }) => <InkBar width={this.state.inkBarWidth} left={left} />}
        </Motion>
        <ul className={classes}>
          {this.getTabs()}   
        </ul>
      </div>
    );
  }
}
  TabNav.propTypes = {
    panels: PropTypes.object,
    activeIndex: PropTypes.number,
  };
export default TabNav;
// export default CSSModules(TabNav, style);