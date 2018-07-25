import React from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation'
import './scss/app.scss'

class HelloMessage extends React.Component {
    render() {
        return <React.Fragment>
            <Navigation/>
            <div className="container">
            </div>
        </React.Fragment>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<Navigation />, App);