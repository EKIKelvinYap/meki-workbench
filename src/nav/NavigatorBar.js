import React from 'react';
import HeaderBar from './header/HeaderBar';
import LeftSidebar from './left/LeftSidebar';
import RightSidebar from './right/RightSidebar';
import FooterBar from './footer/FooterBar';

import './NavigatorBar.css';

class NavigatorBar extends React.Component {

    constructor() {
        super();
        this.leftSidebarRef = React.createRef();
        this.toggleLeftSidebar = this.toggleLeftSidebar.bind(this);
        this.rightSidebarRef = React.createRef();
        this.toggleRightSidebar = this.toggleRightSidebar.bind(this);
    }

    toggleLeftSidebar() {
        this.leftSidebarRef.current.toggleLeftSidebar();
    }

    toggleRightSidebar() {
        this.rightSidebarRef.current.toggleRightSidebar();
    }

    render() {
        return (
            <div>
                <HeaderBar headerBar={this}/>
                <LeftSidebar ref={this.leftSidebarRef}/>
                <RightSidebar ref={this.rightSidebarRef}/>
                <FooterBar />
            </div>
        );
    }
}

export default NavigatorBar;