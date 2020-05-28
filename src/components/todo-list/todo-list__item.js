import React, { Component } from "react";
import './todo-list__item.css'

export default class TodoList__item extends Component {

    render() {
        const { label, onDeleted,
            onToggleDone,
            onToggleImportant,
            important, done} = this.props;

        const style = {
            color: important ? 'steelblue': 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        let className = 'todo-list-item';

        if (done) {
            className += ' done'
        }
        if (important) {
            className += ' important'
        }

        return (
            <span className={className}>
            <span style={style} className='todo-list-item-label'
                onClick={ onToggleDone }>
                { label }
            </span>
            <button className="btn btn-outline-success btn-sm float-right"
            onClick={ onToggleImportant } >
                <i className="fa fa-exclamation"></i>
            </button>
            <button className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}>
                <i className="fa fa-trash-o"></i>
            </button>
        </span>

        );
    }
}