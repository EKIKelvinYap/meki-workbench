import React from 'react';
import { withTranslation } from 'react-i18next';

const determineListItem = (props) => {
    if (props.icon && !props.text) {
        if (props.altText) {
            return (
                <div>
                    <img src={props.icon} alt={props.altText} className="image-item"/>
                    <span className="left-sidebar-list-item-text">{props.altText}</span>
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
            <div>{props.text}</div>
        );
    } else if (props.i && props.text && !props.icon) {
        let listItemClass = `image-item ${props.i}`;
        return (
            <div>
                <i className={listItemClass}></i>
                <span className="left-sidebar-list-item-text">{props.text}</span>
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
                <img src={props.icon} alt={props.text} className="image-item"/>
                <span className="left-sidebar-list-item-text">{props.text}</span>
            </div>
        );
    } 
    return null;
}

// interface leftProps {
//     isExtendedInner?: boolean
// }

// interface leftStates {
//     isExtended: boolean
// }

class LeftSidebarComp extends React.Component {

    constructor(props) {
        super(props);
        this.handleListClick = this.handleListClick.bind(this);
        this.state = {
            isExtended: ((props.isExtendedInner === undefined) ? true : props.isExtendedInner)
        }
    }

    handleListClick = () => {
        let currentState = this.state.isExtended;
        this.setState({
            isExtended: !currentState
        });
        // console.log(this.props);
        // console.log(this.props.children);
    }

    render() {
        // console.log(this.props);
        // console.log(this.state);
        let listItemClass = `left-sidebar-list-item first-list-item ${this.props.active ? 'active' : ''} ${this.props.secondaryActive ? 'secondary-active' : ''} ${(this.props.isExtendedInner === undefined) ? '' : [this.props.isExtendedInner ? '' : 'is-hidden']}`;
        // console.log(this.props.isExtendedInner);
        return (
            <ul className="left-sidebar-list">
                <li className={listItemClass} onClick={this.handleListClick}>
                    {determineListItem(this.props)}
                    {
                        this.props.children && 
                            <span className="left-sidebar-list-item-arrow">
                                <i className={this.state.isExtended ? 'fa fa-caret-down' : 'fa fa-caret-left'}></i>
                            </span>
                    }
                </li>
                {
                    React.Children.map(this.props.children, child => {
                        console.log(child);
                        return React.cloneElement(child, {
                            // isExtendedInner: (this.props.isExtendedInner === undefined) ? this.state.isExtended : this.props.isExtendedInner
                            isExtendedInner: this.state.isExtended
                        });
                    })
                }
            </ul>
        );
    }
}

// export class LeftSidebarItem extends React.Component {

//     // constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //         isExtended: this.props.isExtendedInner
//     //     }
//     // }

//     render() {
//         let listItemClass = `left-sidebar-list-item ${this.props.active ? 'active' : ''} ${this.props.secondaryActive ? 'secondary-active' : ''} ${this.props.isExtendedInner ? '' : 'is-hidden'}`;
//         return (
//             <li className={listItemClass} onClick={this.props.onClick}>
//                 {determineListItem(this.props)}
//                 {
//                     React.Children.map(this.props.children, child => {
//                         return React.cloneElement(child, {
//                             isExtendedInner: this.props.isExtendedInner
//                         });
//                     })
//                 }
//             </li>
//         );
//     }

// }

export default withTranslation() (LeftSidebarComp);