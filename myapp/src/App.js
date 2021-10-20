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
    const text = 'Log in';
    // const logged = true;
    const logged = false;

    return (
        <button>{logged ? "Enter" : text}</button>
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