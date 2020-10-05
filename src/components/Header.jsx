import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.askcovid19.com" className="navbar-brand">Screening COVID-19 made simple by answering a few questions</a>                
                     </div>
                </nav>
            </div>
        )
    }
}

