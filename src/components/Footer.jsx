import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
             
              <footer id="footer">
                <span className="text-muted">
                  <span>
                    {this.props.footer.preemail}<strong>Brian Zou</strong> <a href="mailto:support@askcovid19now.com">support@askcovid19now.com</a>{this.props.footer.precopyright}&#x24B8;{this.props.footer.postcopyright}
                  </span>
                  <div className="row">
                    <a tabIndex="0" role="button" style={{marginLeft: "10px"}} className="btn btn-dark" data-toggle="popover" data-trigger="focus" data-placement="top" title={this.props.footer.me.title} data-html="true" data-content={this.props.footer.me.text} >{this.props.footer.me.button}</a>
                    <a tabIndex="0" role="button" style={{marginLeft: "10px"}} className="btn btn-dark" data-toggle="popover" data-trigger="focus" data-placement="top" title={this.props.footer.dc.title} data-html="true" data-content={this.props.footer.dc.text} >{this.props.footer.dc.button}</a>
                    <button style={{marginLeft: "10px"}} className="btn btn-success" onClick={() => this.props.action('Chinese')} >{this.props.footer.buttonlanguage}</button>
                  </div>
                </span> 
              </footer>  
       
        )
    }
}
