import AppInfo from "../app-info/app-info";
import SeachPanel from "../seach-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../emloyers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";


function WhoAmI(props) {
    return (
        <div>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>My profile</a>
        </div>
    )
}

function App() {
    return (
        <div className="app">
            <WhoAmI name="John"/>
            <AppInfo/>
            <div className="search-panel">
                <SeachPanel/>
                <AppFilter/>
            </div>
            <EmployersList/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;