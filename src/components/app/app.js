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
                { name: 'John C.', salary: 800, increase: false, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: false, id: 2 },
                { name: 'Carl W.', salary: 5000, increase: false, id: 3 },
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
        this.setState(({data}) => ({
            data: [...data, { name: name, salary: salary, increase: false, id: this.maxId++ }]
        }))
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={data}
                    onDelete={id => this.deleteEmployee(id)}
                />
                <EmployeesAddForm
                    addEmployee={(name, salary) => this.addEmployee(name, salary)}
                />
            </div>
        );
    }
}

export default App;