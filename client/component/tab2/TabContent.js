import React, { Component,  cloneElement } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import styles from './style.scss';

class TabContent extends Component{
    getTabPane(){
        const { activeIndex,panels } = this.props;

        return panels.map((child) => {
            if(!child) {return;}
            const order = parseInt(child.props.order,10);
            const isActive = activeIndex === order;
            return React.cloneElement(child,{
                isActive,
                children:child.props.children,
                key:`tabpane-${order}`
            });
        });
    }

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

