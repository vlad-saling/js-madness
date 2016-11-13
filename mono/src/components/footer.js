import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <div>
        <div id="ibm-footer-module"></div>
        <footer aria-label="IBM">
            <div id="ibm-footer">
                <ul>
                    <li><a href="http://www.ibm.com/contact/us/en/">Contact</a></li>
                    <li><a href="http://www.ibm.com/privacy/us/en/">Privacy</a></li>
                    <li><a href="http://www.ibm.com/legal/us/en/">Terms of use</a></li>
                    <li><a href="http://www.ibm.com/accessibility/us/en/">Accessibility</a></li>
                </ul>
            </div>
        </footer>
        </div>
    );
  }
}

export default Footer;