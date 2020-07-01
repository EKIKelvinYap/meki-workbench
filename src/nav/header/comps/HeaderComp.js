import React from 'react';
import { withTranslation } from 'react-i18next';

const HeaderComp = (props) => {

    if (props.icon && !props.text) {
        if (props.altText) {
            return (
                <li className="header-list-item" onClick={props.onClick}>
                    <img src={props.icon} alt={props.altText} className="image-item" title={props.altText}/>
                    {props.children}
                </li>
            );
        } else {
            const {t} = props;
            return (
                <li className="header-list-item" onClick={props.onClick}>
                    <img src={props.icon} alt={t('other.imageMissing')} className="image-item"/>
                    {props.children}
                </li>
            );
        }
    } else if (!props.icon && props.text) {
        return (
            <li className="header-list-item" onClick={props.onClick}>
                {props.text}
                {props.children}
            </li>
        );
    } else if (props.icon && props.text) {
        return (
            <li className="header-list-item" onClick={props.onClick}>
                <img src={props.icon} alt={props.text} className="image-item" title={props.text}/>
                {props.children}
            </li>
        );
    }
    return null;
}

export default withTranslation() (HeaderComp);;