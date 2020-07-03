import React from 'react';
import { withTranslation } from 'react-i18next';

const determineListItem = (props) => {

    if (props.icon && !props.text) {
        if (props.altText) {
            return (
                <div>
                    <img src={props.icon} alt={props.altText} className="image-item" title={props.altText}/>
                </div>
            );
        } else {
            const {t} = props;
            return (
                <div>
                    <img src={props.icon} alt={t('other.imageMissing')} className="image-item"/>
                </div>
            );
        }
    } else if (!props.icon && props.text && !props.i) {
        return (
            <div>
                {props.text}
            </div>
        );
    } else if (props.i && props.text && !props.icon) {
        let listItemClass = `image-item ${props.i}`;
        return (
            <div>
                <i className={listItemClass} title={props.text}></i>
            </div>
        );
    } else if (props.i && !props.text && !props.icon) {
        let listItemClass = `image-item ${props.i}`;
        return (
            <div>
                <i className={listItemClass}></i>
            </div>
        );
    } else if (props.icon && props.text) {
        return (
            <div>
                <img src={props.icon} alt={props.text} className="image-item" title={props.text}/>
            </div>
        );
    }
    return null;
}

const HeaderComp = (props) => {
    return (
        <li className="header-list-item" onClick={props.onClick}>
            {determineListItem(props)}
            {props.children}
        </li>
    );
    
}

export default withTranslation() (HeaderComp);;