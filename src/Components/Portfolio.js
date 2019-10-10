import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

            <div key="resume" className="columns portfolio-item">
              <div className="item-wrap">
                <a href="http://www.rontieu.com" title="resume">
                <img alt="Messenger" src="images/portfolio/portfolio_resume.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Resume Website</h5>
                    <p>My personal resume website created using create-react-app</p>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>

            <div key="messenger" className="columns portfolio-item">
              <div className="item-wrap">
                <a href="https://github.com/rontieu/RCCH-Messenger" title="messenger">
                <img alt="Messenger" src="images/portfolio/portfolio_messenger.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>RCCH Messenger</h5>
                    <p>Chatroom that allows users to sign in and chat with each other</p>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>

            <div key="mediacenter" className="columns portfolio-item">
              <div className="item-wrap">
                <a href="https://github.com/rontieu/MCB1700-Media-Center" title="mediacenter">
                <img alt="mediacenter" src="images/portfolio/portfolio_mediacenter.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Media Center</h5>
                    <p>Games, audio streaming & gallery implemented onto an ARM Cortex-M3</p>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>


            </div>
        </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
