import React, { Component } from 'react';
import Masthead from './components/Masthead.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
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
        <Masthead />
          <div id="ibm-content-wrapper">
            <Header />
            <main role="main" aria-labelledby="ibm-pagetitle-h1">
                <div id="ibm-pcon">
                    <div id="ibm-content">
                        <div id="ibm-content-body">
                            <div id="ibm-content-main">
                                <div className="ibm-columns">
                                    <div className="ibm-col-6-4">
                                        <p className="ibm-h3">
                                            Improve pricing accuracy, responsiveness to competitors and compliance with pricing policies
                                        </p>
                                        <p>
                                            IBM's cloud-based Agile Pricing solution enables retailers, with under $1billion USD in annual revenue, to more efficiently manage and execute prices for every product in every location, helping to drive revenue, margin and customer loyalty improvements. Using a centralised system and flexible rules-based approach retailers can save time, reduce errors, improve their responsiveness to competitor pricing, and ensure compliance with strategic pricing policies and goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </div>
    );
    
  }
}

export default App;
