import React from 'react';
import './LeftSidebar.scss';

// import { withTranslation } from 'react-i18next';

import mainLogo from './logo.svg';
import LeftSidebarComp from './comps/LeftSidebarComp';

import historyIcon from './history.png';
import folderIcon from './folder.png';
import infoIcon from './info.png';

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
                    <ul className="left-sidebar-list">
                        <LeftSidebarComp icon={folderIcon} text="ASDASD" active>
                            {/* <LeftSidebarList>
                                <LeftSidebarItem />
                            </LeftSidebarList> */}
                        </LeftSidebarComp>
                        <LeftSidebarComp icon={historyIcon} text="ASDASD" secondaryActive />
                        <LeftSidebarComp icon={folderIcon} text="ASDASD" />
                        <LeftSidebarComp icon={infoIcon} text="ASDASD" />
                        <LeftSidebarComp text="History" />
                    </ul>
                </div>
            </aside>
        );
    }
}

// const Wrapped = withTranslation({ withRef: true }) (LeftSidebar);
// export default Wrapped;
export default (LeftSidebar);