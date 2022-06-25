import react from "react";
const Projects = () => {
    const projectList = [
        {
            name:'Social Network API',
            text: 'Mongo DB API',
            github: '',
            deployedLink: ''
        },
        {
            name:'Social Network API',
            text: 'Mongo DB API',
            github: '',
            deployedLink: ''
        },
        {
            name:'Social Network API',
            text: 'Mongo DB API',
            github: '',
            deployedLink: ''
        },
        {
            name:'Social Network API',
            text: 'Mongo DB API',
            github: '',
            deployedLink: ''
        },
        {
            name:'Social Network API',
            text: 'Mongo DB API',
            github: '',
            deployedLink: ''
        },
        {
            name:'Social Network API',
            text: 'Mongo DB API',
            github: '',
            deployedLink: ''
        },
        {
            name:'Social Network API',
            text: 'Poop DB API',
            github: '',
            deployedLink: ''
        },
    ]
    return (
        <div className="flex-row"> 
         {projectList.map((project, i) => (
            <div className="card">
                <h3>{project.name}</h3>
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