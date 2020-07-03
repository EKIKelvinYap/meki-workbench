import React from 'react';
import HeaderBar from './header/HeaderBar';
import LeftSidebar from './left/LeftSidebar';
import RightSidebar from './right/RightSidebar';
import FooterBar from './footer/FooterBar';

import './NavigatorBar.scss';

class NavigatorBar extends React.Component {

    constructor() {
        super();
        this.leftSidebarRef = React.createRef();
        this.toggleLeftSidebar = this.toggleLeftSidebar.bind(this);
        this.rightSidebarRef = React.createRef();
        this.toggleRightSidebar = this.toggleRightSidebar.bind(this);
        this.footerBarRef = React.createRef();
    }

    toggleLeftSidebar() {
        this.leftSidebarRef.current.toggleLeftSidebar();
        this.footerBarRef.current.toggleLeftSidebar();
        this.props.navigatorBar.toggleLeftSidebar();
    }

    toggleRightSidebar() {
        this.rightSidebarRef.current.toggleRightSidebar();
        this.footerBarRef.current.toggleRightSidebar();
        this.props.navigatorBar.toggleRightSidebar();
    }

    render() {
        return (
            <div className="navigator-bar">
                <HeaderBar headerBar={this}/>
                <FooterBar ref={this.footerBarRef}/>
                <LeftSidebar ref={this.leftSidebarRef}/>
                <RightSidebar ref={this.rightSidebarRef}/>
            </div>
        );
    }
}

export default NavigatorBar;