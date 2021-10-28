import { Component } from 'react';

import './appTwo.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
        this.nextYear = this.nextYear.bind(this);
    }

    nextYear() {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState(state => ({
            position: e.target.value
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        const {years, position} = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {years} position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введи должность</span>
                    <input type="text" onInput={this.commitInputChanges}/>
                </form>
            </div>
        )
    }
}

function AppTwo() {
    return (
        <div className="appTwo">
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>
            <WhoAmI name="Alex" surname="Black" link="vk.com"/> 
        </div>
    )
}

export default AppTwo;