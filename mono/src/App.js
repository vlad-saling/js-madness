import React, { Component } from 'react';
import Header from './components/header.js'
import Footer from './components/footer.js'
import './App.css';

class App extends Component {

  componentWillMount() {

        //adding page shell classes
        document.body.classList.add('ibm-type');
        document.body.id = 'ibm-com';

        //adding digital data object
        const digitalData = document.createElement('script');
        digitalData.innerText = "digitalData = { page:  { category: { primaryCategory: 'SB03' }, pageInfo: { expiryDate: '2020-12-18', language: 'en-US', publishDate: '2015-10-01', publisher: 'IBM Corporation', version: 'v18', ibm: { contentDelivery: 'Hand coded', contentProducer: 'cwt', country: 'US', ibmDynamicCm: false, industry: 'ZZ', owner: 'Corporate Webmaster/New York/IBM', siteID: 'GLOBAL', subject: 'IBM000', type: 'CT052' } } } }"
        document.head.appendChild(digitalData);
    
        //adding v18 styles
        const styles = document.createElement("link");
        styles.rel = "stylesheet";
        styles.href = "//1.www.s81c.com/common/v18/css/www.css"
        document.head.appendChild(styles);
        
        //adding v18 js
        const script = document.createElement("script");
        script.src = "//1.www.s81c.com/common/v18/js/www.js";
        script.async = true;
        document.body.appendChild(script);

    };
  
  render() {
    return (
        <div id='ibm-top' className="App ibm-landing-page">
          <Header />
          <div id="ibm-content-wrapper">
            <p>
              Content will be here
            </p>
            <Footer />
          </div>
	      </div>
    );
    
  }
}

export default App;
