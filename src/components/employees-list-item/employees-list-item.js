import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {
        name,
        salary,
        increase,
        rise,
        onDelete,
        onToggleProp,
        onChangeSalary
    } = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) classNames += ' increase';
    if (rise) classNames += ' like';

    return (
        <li className={classNames}>
            <span
                className="list-group-item-label"
                data-toggle="rise"
                onClick={onToggleProp}
            >
                {name}
            </span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue={salary + '$'}
                onChange={onChangeSalary}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onToggleProp}
                >
                    <i className="fas fa-cookie"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}
                >
                    <i className="fa fa-trash"></i>
                </button>
                <i className="fa fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;