import React from 'react';
import { withTranslation } from 'react-i18next';

const LeftSidebarComp = (props) => {
    let listItemClass = `left-sidebar-list-item ${props.active ? 'active' : ''} ${props.secondaryActive ? 'secondary-active' : ''}`;
    if (props.icon && !props.text) {
        if (props.altText) {
            return (
                <li className={listItemClass} onClick={props.onClick}>
                    <img src={props.icon} alt={props.altText} className="image-item"/>
                    <span className="left-sidebar-list-item-text">{props.text}</span>
                    {props.children}
                </li>
            );
        } else {
            const {t} = props;
            return (
                <li className={listItemClass} onClick={props.onClick}>
                    <img src={props.icon} alt={t('other.imageMissing')} className="image-item"/>
                    {props.children}
                </li>
            );
        }
    } else if (!props.icon && props.text) {
        return (
            <li className={listItemClass} onClick={props.onClick}>
                {props.text}
                {props.children}
            </li>
        );
    } else if (props.icon && props.text) {
        return (
            <li className={listItemClass} onClick={props.onClick}>
                <img src={props.icon} alt={props.text} className="image-item"/>
                <span className="left-sidebar-list-item-text">{props.text}</span>
                {props.children}
            </li>
        );
    }
    return null;
}

export default withTranslation() (LeftSidebarComp);;