import React from 'react';
import fullpic from '../../../images/full-pic.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div id='about' className="aboutme-container">
      <header className="header">About Me</header>

      <div className="aboutme">
        <div className="image">
            <img src={fullpic} alt="About Me" />
        </div>
        <div className="info">
          <p>Hi, I'm Sandeep Achari, a passionate full-stack developer with a focus on building innovative,user-friendly digital experiences.
              With a strong background in both front-end and back-end development, I strive to create applications that are fast, responsive, accessible, and visually appealing.</p>
          <p>I specialize in crafting websites and applications that prioritize performance and accessibility.
             Whether it’s writing clean, efficient code, or designing intuitive user interfaces.
             I aim to deliver high-quality solutions that meet both user needs and business goals.
             I’m proficient in a variety of technologies, including HTML, CSS, JavaScript, and React for the front end, and Node.js for the back end, along with databases like MongoDB and MySQL.
             I’m also comfortable working with version control tools like Git and platforms like GitHub for seamless collaboration.

             My approach to development is heavily influenced by my dedication to user experience.
             I believe that the best applications are not just functional but also enjoyable to use. 
             I focus on creating responsive designs that adapt flawlessly to different screen sizes and devices, ensuring that users have a consistent experience whether they’re on a mobile phone,
             tablet, or desktop.</p>
        </div>
        </div>

    </div>
  );
}

export default AboutMe;
