import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteEmployee = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addEmployee = (name, salary) => {
        const newEmploee = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => ({
            data: [...data, newEmploee]
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(
                item => item.id === id ?
                {...item, [prop]: !item[prop]} :
                {...item}
            )
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmployee(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    addEmployee={this.addEmployee}
                />
            </div>
        );
    }
}

export default App;