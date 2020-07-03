import React from 'react';
import './LeftSidebar.scss';

// import { withTranslation } from 'react-i18next';

import mainLogo from './logo.svg';
import LeftSidebarComp from './comps/LeftSidebarComp';

import historyIcon from './history.png';
import folderIcon from './folder.png';
// import infoIcon from './info.png';

class LeftSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.toggleLeftSidebar = this.toggleLeftSidebar.bind(this);
        this.state = {
            isLeftSidebarHidden: false
        };
    }

    toggleLeftSidebar() {
        let currentLeftSidebarState = this.state.isLeftSidebarHidden;
        this.setState({
            isLeftSidebarHidden: !currentLeftSidebarState
        });
    }

    render() {
        // const {t} = this.props;
        let leftSidebarClass = `left-sidebar ${this.state.isLeftSidebarHidden ? 'left-sidebar-hidden' : ''}`;
        return (
            <aside className={leftSidebarClass}>
                <div className="main-logo-container">
                    <img src={mainLogo} alt="MEK-i" className="main-logo"/>
                </div>
                <div className="left-sidebar-container">
                    <LeftSidebarComp i="fa fa-folder" text="A">
                        <LeftSidebarComp i="fa fa-user" text="A1" />
                        {/* <LeftSidebarComp i="fa fa-phone" text="A2" />
                        <LeftSidebarComp i="fa fa-tags" text="A3" /> */}
                        <LeftSidebarComp icon={folderIcon} text="A4">
                            <LeftSidebarComp icon={historyIcon} text="A41" />
                        </LeftSidebarComp>
                        <LeftSidebarComp icon={folderIcon} text="A4">
                            <LeftSidebarComp icon={historyIcon} text="A41" />
                            <LeftSidebarComp icon={folderIcon} text="A4">
                            <LeftSidebarComp icon={historyIcon} text="A41" />
                        </LeftSidebarComp>
                        </LeftSidebarComp>
                        {/* <LeftSidebarComp icon={historyIcon} text="A5" /> */}
                    </LeftSidebarComp>
                    {/* <LeftSidebarComp icon={historyIcon} text="B" />
                    <LeftSidebarComp icon={historyIcon} text="C" />
                    <LeftSidebarComp icon={infoIcon} text="D" />
                    <LeftSidebarComp i="fa fa-car" text="E" /> */}
                </div>
                {/* <div className="left-sidebar-container">
                    <LeftSidebarComp i="fa fa-folder" text="A">
                        <LeftSidebarComp i="fa fa-folder" text="A">
                        
                        </LeftSidebarComp>
                    </LeftSidebarComp>
                </div> */}
            </aside>
        );
    }
}

// const Wrapped = withTranslation({ withRef: true }) (LeftSidebar);
// export default Wrapped;
export default (LeftSidebar);