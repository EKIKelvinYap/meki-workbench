import React from 'react';

const LeftSidebarList = (props) => {
    return (
        <ul className="left-sidebar-list">
            {props.children}
        </ul>
    );
}

export default LeftSidebarList;