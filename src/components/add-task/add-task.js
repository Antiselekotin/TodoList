import React, { Component } from "react";

import './add-task.css';

export default class AddTask extends Component{
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
        this.onLabelChange = (event) => {
            this.setState({
                inputValue: event.target.value
            }
            )
        };
        this.onSubmit = (e) => {
                e.preventDefault();
                this.props.onAdd(this.state.inputValue);
                this.setState({
                    inputValue: ''
                })
            }
        }


    render() {
        return (
            <form className='add-task'
                onSubmit={ (e) => this.onSubmit(e) }>
                <input placeholder='input task'
                       className='form-control add-task__input'
                        onChange={ this.onLabelChange }
                        value={this.state.inputValue}/>
                <button className="btn btn-outline-info btn-sm add-task__button">
                    Add Element
                </button>
            </form>
        )
    }

};