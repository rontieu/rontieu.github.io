import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
            <ul className="social-links">
              <li><a style={{color:"#505050"}} href="https://www.linkedin.com/in/rontieu" className = "fa fa-linkedin"></a></li>
              <li><a style={{color:"#505050"}} href="https://www.github.com/rontieu" className = "fa fa-github"></a></li>
              <li><a style={{color:"#505050"}} href="mailto:ron@rontieu.com" className = "fa fa-envelope-o"></a></li>
            </ul>

           <ul className="copyright">
              <li style={{color:"#505050"}}>&copy; Copyright 2019 Ron Tieu</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
