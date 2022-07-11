import react from "react";
import mongo from '../../assets/images/portfolio/mongo.png'
import node from '../../assets/images/portfolio/node.png'
import weather from '../../assets/images/portfolio/weather.jpg'
import budget from '../../assets/images/portfolio/budget.jpg'
import friends from '../../assets/images/portfolio/friends.jpg'
import library from '../../assets/images/portfolio/library.jpg'
import plelp from '../../assets/images/portfolio/plelp.jpg'

const Projects = () => {
    const projectList = [
        {
            name:'Plelp',
            text: 'Full Stack MERN Application',
            github: 'https://github.com/sam-levin/plelp',
            deployedLink: 'https://intense-beach-35555.herokuapp.com/',
            style: {
                backgroundImage: `url(${plelp})`,
                backgroundSize: "cover"  ,
                opacity: .7
            
            }
        },
        {
            name:'Weather API',
            text: 'Third Party APIs',
            github: 'https://github.com/sam-levin/Weather-API',
            deployedLink: 'https://sam-levin.github.io/Weather-API/',
            style: {
                backgroundImage: `url(${weather})`,
                backgroundSize: "cover"  ,
                opacity: .7
            
            }
        },
        {
            name:'Page 1',
            text: 'Front End Express + Node',
            github: 'https://github.com/drew990/Page-One-Library',
            deployedLink: ' https://fathomless-shelf-93738.herokuapp.com/',
            style: {
                backgroundImage: `url(${library})`,
                backgroundSize: "cover" ,
                opacity: .7
               
            }
        },
        {
            name:'Budget Tracker',
            text: 'NoSQL Backend',
            github: 'https://github.com/sam-levin/budget-tracker',
            deployedLink: 'https://sam-levin.github.io/budget-tracker/',
            style: {
                backgroundImage: `url(${budget})`,
                backgroundSize: "cover"  ,
                opacity: .7
             
            } 
        },
        {
            name:'ReadMe Generator',
            text: 'Node.js Backend',
            github: 'https://github.com/sam-levin/readme-generator',
            deployedLink: 'https://github.com/sam-levin/readme-generator',
            style: {
                backgroundImage: `url(${node})`,
                backgroundSize: "cover"    ,
                opacity: .7
            
            } 
        },
        {
            name:'Social Network API',
            text: 'Mongo DB API',
            github: 'https://github.com/sam-levin/social-api',
            deployedLink: 'https://github.com/sam-levin/social-api',
            style: {
                backgroundImage: `url(${friends})`,
                backgroundSize: "cover",
                opacity: .7
            } 
        },
        {
            name:'React Portfolio',
            text: 'React Front End',
            github: 'https://github.com/sam-levin/react-portfolio',
            deployedLink: '',
            style: {
                backgroundImage: `url(${mongo})`,
                backgroundSize: "cover", 
                opacity: .7
            } 
        },
    ]
    return (
        <div className="flex-row"> 
         {projectList.map((project, i) => (
            <div style={project.style} className="card">
                <h3 >{project.name}</h3>
                <p>{project.text}</p>
                <a href={project.github}>Github</a>
                <br></br>
                <a href={project.deployedLink}>Deployed App</a>
            </div>
            ))}
        </div>
    )
}
export default Projects;