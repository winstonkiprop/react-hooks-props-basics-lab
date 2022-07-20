import React from "react";
import Links from "../components/Links"
import About from ".About"
function About() {
  function About(props) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>Put the bio in here</p>
        {props.bio && props.bio.length>1 ? <p>{props.bio}</p> : null}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
      </div>
    );
  }}
  export default About;
  