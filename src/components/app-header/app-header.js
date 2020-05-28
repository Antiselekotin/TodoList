import React from "react";
import './app-header.css'

const AppHeader = ({ done, todo}) => {
    return (
        <div className='app-header'>
            <h1 className='app-header__title'>My toDo List</h1>
            <h2 className='app-header__status'>{todo - done} more to do, {done} done</h2>
        </div>

    );
};
export default AppHeader;