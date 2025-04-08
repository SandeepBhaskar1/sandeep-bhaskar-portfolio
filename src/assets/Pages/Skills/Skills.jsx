import React from 'react';
import './Skills.css';
import java_script from '../../../images/Tools/javascript.png';
import html_logo from '../../../images/Tools/html_logo.png';
import css_logo from '../../../images/Tools/css_logo.png';
import reactjs_logo from '../../../images/Tools/react_logo.jpeg';
import angularjs_logo from '../../../images/Tools/angularjs_logo.jpeg';
import nextjs_logo from '../../../images/Tools/nextjs-icon.jpeg';
import nodejs_logo from '../../../images/Tools/Node_js logo.jpeg';
import MySQL from '../../../images/Tools/my-sql_logo.jpeg';
import mongo_db from '../../../images/Tools/mongodb_logo.svg';
import git_logo from '../../../images/Tools/git_logo.jpeg';

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className="header">
        <header className='skills-header'>Skills</header>
      </div>
      <div className="skills-head">
        <p>The skills, tools, and technologies I am really good at:</p>
      </div>
      <div className="tools">
        <ul><img src={html_logo} alt="html logo" className='html-logo' />HTML</ul>
        <ul><img src={css_logo} alt="css logo" />CSS</ul>
        <ul><img src={java_script} alt="java script logo" />Java Script</ul>
        <ul><img src={reactjs_logo} alt="React.js logo" />React.js</ul>
        <ul><img src={angularjs_logo} alt="Angular.js logo" />Angular.js</ul>
        <ul><img src={nextjs_logo} alt="Next.js logo" />Next.js</ul>
        <ul><img src={nodejs_logo} alt="Node.js logo" />Node.js</ul>
        <ul><img src={MySQL} alt="MySQL logo" />MySQL</ul>
        <ul><img src={mongo_db} alt="Mongo DB logo" />Mongo DB</ul>
        <ul><img src={git_logo} alt="Git logo" />Git</ul>
      </div>
    </div>
  );
}

export default Skills;
