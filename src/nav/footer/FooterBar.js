import React from 'react';
import './FooterBar.scss';

class FooterBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLeftSidebarHidden: false,
            isRightSidebarHidden: true
        }
    }

    toggleLeftSidebar() {
        let currentLeftSidebarState = this.state.isLeftSidebarHidden;
        this.setState({
            isLeftSidebarHidden: !currentLeftSidebarState
        });
    }

    toggleRightSidebar() {
        let currentRightSidebarState = this.state.isRightSidebarHidden;
        this.setState({
            isRightSidebarHidden: !currentRightSidebarState
        });
    }

    render () {
        let footerBarClass = `footer-bar ${this.state.isLeftSidebarHidden ? 'left-sidebar-hidden' : ''} ${this.state.isRightSidebarHidden ? 'right-sidebar-hidden' : ''}`;
        return (
            <footer className={footerBarClass}>
                <div>footer</div>
            </footer>
        );
    }
}

export default FooterBar;