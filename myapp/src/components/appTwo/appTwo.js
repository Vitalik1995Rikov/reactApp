import { Component } from 'react';

import './appTwo.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <h1>My name is {name}, surname - {surname}</h1>
                <a href={link}>My profile</a>
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