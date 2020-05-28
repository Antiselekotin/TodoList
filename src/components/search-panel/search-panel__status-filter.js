import React, { Component } from "react";


export default class SearchPanel__statusFilter extends Component{
    render() {
        const {data, filter} = this.props;

        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button"
                        className={ data[0] }
                onClick={ () => filter(0)}>All</button>
                <button type="button"
                        className={ data[1] }
                        onClick={ () => filter(1)}>Active</button>
                <button type="button"
                        className={ data[2] }
                        onClick={ () => filter(2)}>Done</button>
            </div>
        )
    }
}