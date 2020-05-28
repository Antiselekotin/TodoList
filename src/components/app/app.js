import React, {Component} from "react";

import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import AddTask from "../add-task";

import './app.css';


export default class App extends Component {
    constructor() {
        super();
        this.maxID = 100;
        this.createTodoItem = (label) => {
            return {
                label,
                important: false,
                done: false,
                id: this.maxID++,
                display: true
            }
        };
        this.findIndex = (toDoData, id) => toDoData.findIndex((el) => el.id === id);
        this.state = {
            toDoData: [
                this.createTodoItem('Drink a cup of tea'),
                this.createTodoItem('Learn React'),
                this.createTodoItem('Build an Awesome App')
        ],
            filterStatus: ['btn btn-info', 'btn btn-outline-secondary', 'btn btn-outline-secondary']
        };

        this.deleteElement = (id) => {
            this.setState(({ toDoData }) => {
                const idx = this.findIndex(toDoData, id);

                const newArray = [
                    ...toDoData.slice(0, idx),
                    ...toDoData.slice(idx + 1)
                ];

                return {
                    toDoData: newArray
                }
            })
        };
        this.addElement = (text) => {
            this.setState(({ toDoData }) => {
                const newArray = [...toDoData, this.createTodoItem(text)];
                return {
                    toDoData: newArray
                }
            })
        };

        this.toggleProperty = (id, property) => {
            this.setState(({ toDoData }) => {
                const idx = this.findIndex(toDoData, id);
                const newArray = toDoData;
                newArray[idx][property] = !newArray[idx][property];
                return {
                    toDoData: newArray
                }
            })
        };
        this.onToggleDone = (id) => {
            this.toggleProperty(id, 'done')
        };
        this.onToggleImportant = (id) => {
            this.toggleProperty(id, 'important')
        };
        this.onSearch = (event) => {
            const str = event.target.value.toUpperCase();

            this.setState(({ toDoData }) => {

                const newArray = toDoData.map((el) => {
                    (el.label.toUpperCase().indexOf(str) < 0) ? el.display = false : el.display = true;
                    return el;
                });
                return {
                    toDoData: newArray
                }
            })
        };
        this.filter = (id) => {
            this.setState(() => {
                const newArray = [];
                for (let i = 0; i <= this.state.filterStatus.length; i++) {
                     (i === id) ? newArray.push('btn btn-info') : newArray.push('btn btn-outline-secondary');
                }
                return {
                    filterStatus: newArray
                }
            });
            activeDoneFilter(id);
        };
        const activeDoneFilter = (id) => {
            this.setState(({ toDoData }) => {
                const newArray = toDoData.map((el) => {
                    if (id === 0) {
                        el.display = true;
                    } else if (id === 1) {
                        !el.important ? el.display = false: el.display = true;
                    } else {
                        !el.done ? el.display = false: el.display = true;
                    }
                })
            })
        }
    }
    render() {
        const { toDoData, filterStatus } = this.state;
        const doneCount = toDoData.filter((el) => el.done).length;
        return (
            <div className='app-window'>
                <AppHeader done={doneCount} todo={toDoData.length}/>
                <SearchPanel search={ this.onSearch }
                filter={ this.filter }
                data={ filterStatus }/>
                <TodoList list={toDoData}
                          onDeleted={ this.deleteElement }
                          onToggleDone={ this.onToggleDone }
                          onToggleImportant={ this.onToggleImportant }
                />
                <AddTask onAdd={ this.addElement }/>
            </div>
        );
    };
}