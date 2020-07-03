import React from 'react';
import './Content.scss';

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.toggleLeftSidebar = this.toggleLeftSidebar.bind(this);
        this.toggleRightSidebar = this.toggleRightSidebar.bind(this);

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
        let contentClass = `content ${this.state.isLeftSidebarHidden ? 'left-sidebar-hidden' : ''} ${this.state.isRightSidebarHidden ? 'right-sidebar-hidden' : ''}`;
        return (
            <div className={contentClass}>
                <p>content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>last last</p>
            </div>
        );
    }
}

export default Content;