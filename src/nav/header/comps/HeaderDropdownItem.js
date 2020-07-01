import React from 'react';

const HeaderDropdownItem = (props) => {
    return (
        <li className="dropdown-item" onClick={props.onClick}>
            {props.children}
        </li>
    );
}

export default HeaderDropdownItem;