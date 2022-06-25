import React from "react";
import Pdf from '../../assets/resume/Sam-Levin-Resume.pdf'

const Resume = () => {
    return (
        <div className="padding-left">
            <h5>Resume</h5>
            <a href={Pdf} target="blank"><p>Click here to download my resume!</p></a>
            <h5>What I'm currently doing:</h5>
            <p>Right now, I'm working as a Financial Analyst in PE Real Estate! At the same time I'm working on learning React</p>
            <h5>Skills</h5>
            <ul>
                <li>Javascript</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>NoSQL</li>
                <li>Adobe Create Suite</li>
                <li>Microsoft Office</li>
                <li>Microsoft Excel</li>
            </ul>
        </div> 
    )
}

export default Resume