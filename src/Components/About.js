import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="Ron Tieu" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p style={{color:"#D3D3D3"}}>
              I'm a technology fan who loves to code and work with software. I enjoy programming in Javascript, Java, C++, Python, working with Android Applications. In my spare time, I also enjoy reading novels, as well as learning new languages.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p style={{color:"#D3D3D3"}} className="address">
    						    <span>Ron Tieu</span>
                    <br/>
    						    <span>Toronto, Canada</span>
                    <br />
    						    <span>647-889-2843</span>
                    <br/>
                    <span>ron@rontieu.com</span>
    					   </p>
               </div>
               <div className="columns download">
                  <p>
                      <a href="pdf/resume.pdf"  target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
