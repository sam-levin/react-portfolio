import React from "react";
import Pdf from '../../assets/resume/Sam-Levin-Resume.pdf'

const Resume = () => {
    return (
        <div>
            <h2>Resume and Skills</h2>
            <a href={Pdf} target="blank">Click here to download my resume!</a>
            <h3>Skills</h3>
            <ul>
                <li>MongoDB</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>React</li>
            </ul>
        </div> 
    )
}

export default Resume