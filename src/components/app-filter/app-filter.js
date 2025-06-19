import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'moreThan1000', label: 'Зп больше 1000$' },
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = name === filter;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button
                key={name}
                className={`btn ${clazz}`}
                type="button"
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;