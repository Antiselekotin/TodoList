import React from "react";
import TodoList__item from "./todo-list__item";
import './todo-list.css';

const TodoList = ({ list, onDeleted, onToggleDone, onToggleImportant } ) => {

    const elements = list.map((item) => {

        const {id, display ,...values} = item;
        let className = 'list-group-item';
        if(!display) {
            className += ' none'
        }
        return (
            <li key={id} className={className}>
                <TodoList__item { ...values }
                onDeleted={ () => onDeleted(id) }
                onToggleDone={ () => onToggleDone(id) }
                onToggleImportant={ () => onToggleImportant(id) }/>

            </li>
        );
    });

    return (
        <ul className='list-group todo-list'>
            { elements }
        </ul>
    );
};

export default TodoList;