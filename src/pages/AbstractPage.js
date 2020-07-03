import React from 'react';
import NavigatorBar from '../nav/NavigatorBar';
import Content from '../content/Content';

class AbstractPage extends React.Component {

    constructor(props) {
        super(props);
        this.toggleLeftSidebar = this.toggleLeftSidebar.bind(this);
        this.toggleRightSidebar = this.toggleRightSidebar.bind(this);

        this.contentRef = React.createRef();
    }

    toggleLeftSidebar() {
        this.contentRef.current.toggleLeftSidebar();
    }

    toggleRightSidebar() {
        this.contentRef.current.toggleRightSidebar();
    }

    render() {
        return (
            <div>
                <NavigatorBar navigatorBar={this}/>
                <Content ref={this.contentRef}/>
            </div>
        );
    }
}

export default AbstractPage;