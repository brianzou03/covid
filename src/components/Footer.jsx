import React, { Component } from 'react';


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
                  <span>
                    For technical support, please email <strong>Brian Zou</strong> <a href="mailto:support@askcovid19now.com">support@askcovid19now.com</a>.
                    Copyright &#x24B8; 2020 AskCovid19Now. All Rights Reserved.
                  </span>
                  <div className="row">
                    <a tabindex="0" role="button" style={{marginLeft: "10px"}}  className="btn btn-dark" data-toggle="popover" data-trigger="focus" data-placement="top"  title="Behind This App" data-html="true" data-content="<p>Hey there! Welcome to my Covid-19 screening application askcovid19now.com! This application will remain <strong>free</strong> forever. Let me introduce myself - I’m <strong>Brian Zou</strong>, a senior at South Pasadena High School. You may be wondering, why did I create this application? It's rather simple for me, honestly. I wanted to help the community, and what better way than to do something I love (programming), and apply this application to one of my favorite volunteer organizations - Asian Youth Center (AYC)? Since I had some free time, I got to work, writing the code to the very site you are currently on. I hope that this application has helped you narrow down your ailment. Good luck in your fight against COVID-19!</p>
" >About Me</a>
                    <a tabindex="0" role="button"  style={{marginLeft: "10px"}}  className="btn btn-dark" data-toggle="popover" data-trigger="focus" data-placement="top"  title="Liability Disclaimer" data-html="true" data-content="<p>This disclaimer applies to website https://www.askcovid19now.com.</p>
  <p><strong>THIS SITE DOES NOT PROVIDE MEDICAL ADVICE</strong></p>
  <p>The content on this website, including, but not limited to, the text, graphics, images, links, and other materials are for informational purposes only.&nbsp; The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment, and does not constitute medical or other professional advice.&nbsp; AskCovid19Now does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website.&nbsp; Reliance on any information provided herein is solely at your own risk.&nbsp; Never disregard professional medical advice or delay in seeking it because of something you have read or seen on this website.</p>
  <p><strong>MEDICAL DISCLAIMER.</strong>&nbsp;IF THIS IS A MEDICAL EMERGENCY, PLEASE IMMEDIATELY CALL EMERGENCY PERSONNEL (911) TO GET PROMPT MEDICAL ATTENTION. DO NOT RELY ON ELECTRONIC COMMUNICATIONS FOR ASSISTANCE IN REGARD TO YOUR IMMEDIATE, URGENT MEDICAL NEEDS.</p>" >Disclaimer</a>
                  </div>
                </span>
               
              </footer>  
       
        )
    }
}
