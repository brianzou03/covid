import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
             
              <footer id="footer">
                <span className="text-muted">
                  <p>
                    For technical support of the site, please contact Brian Zou at support@askcovid19now.com.
                  </p>
                  <p>
                    All Rights Reservied 2020 @AskCovid19Now.
                  </p>
                </span>
                
              </footer>  
       
        )
    }
}
