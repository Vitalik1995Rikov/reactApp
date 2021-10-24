import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

function EmployersList({data}) {
    return (
        <ul className="app-list list-group">
            <EmployersListItem name="John" salary={800}/>
            <EmployersListItem name="Alex" salary={3000}/>
            <EmployersListItem name="Bob" salary={5000}/>
        </ul>
    )
}

export default EmployersList;