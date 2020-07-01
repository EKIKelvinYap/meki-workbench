import React from 'react';

import './RightSidebar.scss';
import RightSidebarComp from './comps/RightSidebarComp';

class RightSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.toggleRightSidebar = this.toggleRightSidebar.bind(this);
        this.state = {
            isRightSidebarHidden: true
        };
    }

    toggleRightSidebar() {
        let currentRightSidebarState = this.state.isRightSidebarHidden;
        this.setState({
            isRightSidebarHidden: !currentRightSidebarState
        });
    }

    render () {
        let rightSidebarClass = `right-sidebar ${this.state.isRightSidebarHidden ? 'right-sidebar-hidden' : ''}`;
        return (
            <aside className={rightSidebarClass}>
                <div className="right-sidebar-title-container">
                    <span className="right-sidebar-title">Property View</span>
                </div>
                <div className="right-sidebar-container">
                    <ul className="right-sidebar-list">
                        <RightSidebarComp text="asd"/>
                        <RightSidebarComp text="asd"/>
                        <RightSidebarComp text="asd"/>
                        <RightSidebarComp text="asd"/>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default RightSidebar;