import AppInfo from "../app-info/app-info";
import SeachPanel from "../seach-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../emloyers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";


function App() {

    const data = [
        {name: 'John', salary: 800},
        {name: 'Alex', salary: 3000},
        {name: 'Bob', salary: 5000}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SeachPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;