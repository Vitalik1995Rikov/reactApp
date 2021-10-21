import AppInfo from "../app-info/app-info";
import SeachPanel from "../seach-panel/search-panel";
import "./app.css";


function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SeachPanel/>
            </div>
        </div>
    )
}

export default App;