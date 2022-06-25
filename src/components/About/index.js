import React from "react";
import Photo from "../../assets/images/img.JPG"

const About = () => {
    return (
        <div className="flex-row about">
            <div className="flex-auto">
                <img classname="small" src={Photo}></img>
            </div>
            <div className="flex-auto">
            <h3> About Me</h3>
            <p>Hi, my name is Sam Levin. I'm 23 years old and living in Seattle, WA. I graduated from the University of Washington with a degree in Landscape Achitecture, but I figured out that it's not for me, so I decided to learn how to code. I'm currently a student in the UC Berkeley Full-Stack Web Development Bootcamp, and this is my React Project. Please feel free to reach out if you have any questions. Thanks for stopping by!</p>
            </div>
            
        </div>
    )
}

export default About;