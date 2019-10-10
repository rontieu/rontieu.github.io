import React, { Component } from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var greeting = this.props.data.greeting;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="pdf/resume.pdf">Resume</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 style={{fontSize:"3.5"+"em"}}>{greeting}</h1>
            <h1 className="responsive-headline">{name}.</h1>
            <h2 style={{color:'#fff'}}> I am&nbsp;
              <Typed 
                strings={[
                  'a Web Developer.',
                  'a Computer Engineer.',
                  'an Android Enthusiast.',
                  'an E-Sports Fan.',
                  'a Skier.'
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                loop
              />
            </h2>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
