import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.askcovid19.com" className="navbar-brand">Suspicious you've got COVID-19 virus, ask this screening app.</a> </div>
                </nav>
            </div>
        )
    }
}
