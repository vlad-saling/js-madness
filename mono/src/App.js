import React, { Component } from 'react';
import logo from './logo.svg';
//import Header from './components/header.js'
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

        <div id="ibm-masthead" role="banner" aria-label="IBM">
          <div id="ibm-mast-options">
            <ul role="toolbar" aria-labelledby="ibm-masthead">
              <li id="ibm-geo" role="presentation">
                <a href="http://www.ibm.com/planetwide/select/selector.html" role="button" aria-label="United states selected - Choose a country">United States</a>
              </li>
            </ul>
          </div>
          <div id="ibm-universal-nav">
            <nav aria-label="IBM">
              <div id="ibm-home">
                <a href="http://www.ibm.com/us/en/">IBM&reg;</a>
              </div>
              <ul id="ibm-menu-links" role="toolbar" aria-label="Site map">
                <li>
                  <a href="http://www.ibm.com/sitemap/us/en/">Site map</a>
                </li>
              </ul>
            </nav>
            <div id="ibm-search-module" role="search" aria-labelledby="ibm-masthead">
              <form id="ibm-search-form" action="https://www.ibm.com/Search/" method="get">
                <p>
                  <label for="q">IBM</label>
                  <input type="text" maxlength="100" value="" placeholder="Search" name="q" id="q" aria-label="Search"/>
                  <input type="hidden" value="18" name="v"/>
                  <input type="hidden" value="utf" name="en"/>
                  <input type="hidden" value="en" name="lang"/>
                  <input type="hidden" value="us" name="cc"/>
                  <input type="submit" id="ibm-search" className="ibm-btn-search" value="Submit"/>
                </p>
              </form>
            </div>
          </div>
        </div>


          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

        </div>
        
    );
    
  }
}

export default App;
