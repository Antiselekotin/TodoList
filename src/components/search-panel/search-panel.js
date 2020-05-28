import React, { Component } from "react";
import SearchPanelStatusFilter from "./search-panel__status-filter";
import './search-panel.css';

export default class SearchPanel extends Component{

    render() {
        const {search, filter, data} = this.props;
        return (
            <div className='search-panel'>
                <input placeholder="search" type='text'
                       className="form-control"
                       onChange={ (event) => search(event)}
                />
                <SearchPanelStatusFilter filter={ filter } data={ data }/>
            </div>
        )
    }


};

