import AppInfo from "../app-info/app-info";
import SeachPanel from "../seach-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../emloyers-list/employers-list";

import "./app.css";

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SeachPanel/>
                <AppFilter/>
                <EmployersList/>
            </div>
        </div>
    )
}

export default App;