import React from 'react';
import HeaderComp from './comps/HeaderComp';

import { withTranslation } from 'react-i18next';

import './HeaderBar.scss';
import sidebarToggleIcon from './sidebar-toggle-icon.png';
import propertyViewToggleIcon from './property-view-toggle-icon.png';
import alarmIcon from './alarm.jpg';
import HeaderDropdownMenu from './comps/HeaderDropdownMenu';
import HeaderDropdownItem from './comps/HeaderDropdownItem';

class HeaderBar extends React.Component {

    constructor(props) {
        super(props);
        this.toggleLeftSidebar = this.toggleLeftSidebar.bind(this);
        this.toggleRightSidebar = this.toggleRightSidebar.bind(this);
        this.toggleLanguage = this.toggleLanguage.bind(this);

        this.state = {
            isLeftSidebarHidden: false,
            isRightSidebarHidden: true
        };
    }

    toggleLeftSidebar() {
        this.props.headerBar.toggleLeftSidebar();
        let currentLeftSidebarState = this.state.isLeftSidebarHidden;
        this.setState({
            isLeftSidebarHidden: !currentLeftSidebarState
        });
    }

    toggleRightSidebar() {
        this.props.headerBar.toggleRightSidebar();
        let currentRightSidebarState = this.state.isRightSidebarHidden;
        this.setState({
            isRightSidebarHidden: !currentRightSidebarState
        });
    }

    toggleLanguage() {
        const {i18n} = this.props;
        console.log(i18n);
        if (i18n.language === 'ch') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ch');
        }
    }

    render() {
        const {t} = this.props;
        let headerBarClass = `header-bar ${this.state.isLeftSidebarHidden ? 'left-sidebar-hidden' : ''} ${this.state.isRightSidebarHidden ? 'right-sidebar-hidden' : ''}`;
        return (
            <header className={headerBarClass}>
                <ul className="header-list">
                    <HeaderComp icon={sidebarToggleIcon} text={t('header.toggleSidebar')} onClick={this.toggleLeftSidebar}/>
                    <HeaderComp text={t('header.home')}/>
                    <HeaderComp text={t('header.setting')}>
                        <HeaderDropdownMenu>
                            <HeaderDropdownItem>setting1 setting1</HeaderDropdownItem>
                            <HeaderDropdownItem>setting2 setting2</HeaderDropdownItem>
                            <HeaderDropdownItem>setting3 setting3</HeaderDropdownItem>
                        </HeaderDropdownMenu>
                    </HeaderComp>
                </ul>
                <ul className="header-list right-list">
                    <HeaderComp text={t('header.toggleLanguage')} onClick={this.toggleLanguage}/>
                    <HeaderComp icon={alarmIcon} text={t('header.alarm')}/>
                    <HeaderComp icon={propertyViewToggleIcon} text={t('header.togglePropertyView')} onClick={this.toggleRightSidebar}/>
                </ul>
            </header>
        );
    }

}

export default withTranslation() (HeaderBar);