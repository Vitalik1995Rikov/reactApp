import './App.css';


const Header = () => {
    return (
        <h1>Header</h1>
    )
}

const Field = () => {
    return (
        <input type="text" placeholder="Input here"/>
    )
}

const Btn = () => {
    return (
        <button/>
    )
}


function App() {
    return(
        <div className="App">
            <Header/>
            <Field/>
            <Btn/>
        </div>
    )
}

export default App;