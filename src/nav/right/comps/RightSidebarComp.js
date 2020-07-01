import React from 'react';
import { withTranslation } from 'react-i18next';

const RightSidebarComp = (props) => {
    let listItemClass = `right-sidebar-list-item ${props.active ? 'active' : ''} ${props.secondaryActive ? 'secondary-active' : ''}`;
    if (props.text) {
        return (
            <li className={listItemClass} onClick={props.onClick}>
                <span>{props.text}</span>
                {props.children}
            </li>
        );
    }
    return null;
}

export default withTranslation() (RightSidebarComp);;