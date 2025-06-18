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
            ]
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

    render() {
        const { data } = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={data}
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