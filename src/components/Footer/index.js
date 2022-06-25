import react from "react";
import linkedin from '../../assets/images/linked.svg'
import insta from '../../assets/images/insta.svg'
import github from '../../assets/images/github.svg'
const Footer = () => {
    const socials = [
        {
            url:"https://github.com/sam-levin",
            img:github
        },
        {
            url:"https://www.linkedin.com/in/samuel-levin-b98a1414b/",
            img: linkedin
        },
        {
            url:"instagram.com/user/samlevinpics",
            img: insta
        }
    ]
    return (
        <div className="footer flex-row center">
            {socials.map((social) => (
                <a className="mx-1" target="blank" href={social.url}>
                    <img className="icon" src={social.img}></img>
                </a>
            )
            )}
        </div>
    )
}

export default Footer;