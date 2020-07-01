import React from 'react';

const HeaderDropdownMenu = (props) => {
    return (
        <ul className="dropdown-menu">
            {props.children}
        </ul>
    );
}

export default HeaderDropdownMenu;