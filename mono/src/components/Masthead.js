import React from 'react';

class Masthead extends React.Component {
  render() {
    return (
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
                <label htmlFor="q">IBM</label>
                <input type="text" maxLength="100" value="" placeholder="Search" name="q" id="q" aria-label="Search"/>
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
    );
  }
}

export default Masthead;