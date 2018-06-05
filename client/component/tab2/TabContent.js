import React, { Component,  cloneElement } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import style from './style.scss';

/**
 * {panels}:
 * 其中props:{order: "0", tab: "Tab 1", children: "第一个 Tab 里的内容"}
 * TabPane是怎么跟getTabPane()连续起来的呢？
 */
class TabContent extends Component{
    getTabPane(){
        const { activeIndex,panels } = this.props;  //从Tabs.js来
        console.log({panels});
        return panels.map((child) => {
            if(!child) {return;}
            const order = parseInt(child.props.order,10);
            const isActive = activeIndex === order;
            return React.cloneElement(child,{  //cloneElement，把值传到TabPane.js？child就是TabPane, 从Tabs中获取到panels={this.immChildren}，把获取到的值赋值给child并返回，所以在TabPane.js中能获取到isActive
                isActive,
                children:child.props.children,
                key:`tabpane-${order}`
            });
        });
    }
//  {this.getTabPane()}会渲染出TabPane.js
    render(){
        const classes = classnames({
            content:true
        });
        return (
            <div className={classes}>
                {this.getTabPane()}
            </div>
        );
    }
}

TabContent.propTypes = {
  classPrefix: PropTypes.string,
  panels: PropTypes.node,
  activeIndex: PropTypes.number
};
export default TabContent;

