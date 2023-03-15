import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faHome, faIdCard } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarMain">
        <div className="navbarMenu">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="2xl" className="navbarIcon" />
          </Link>
          <Link to="/Portfolio">
            <FontAwesomeIcon icon={faGlobe} size="2xl" className="navbarIcon" />
          </Link>
          <Link to="/Contact">
            <FontAwesomeIcon icon={faIdCard} size="2xl" className="navbarIcon" />
          </Link>
        </div>
        <div className="navbarSocial">
          <a target="_blank" href="https://www.linkedin.com/in/roshancodes/"><FontAwesomeIcon icon={faLinkedinIn} size="xl" className="navbarSocialIcon" /></a>
          <a target="_blank" href="https://github.com/RoshanStack"><FontAwesomeIcon icon={faTwitter} size="xl" className="navbarSocialIcon" /></a>
          <a target="_blank" href="https://twitter.com/RoshanStack"><FontAwesomeIcon icon={faGithub} size="xl" className="navbarSocialIcon" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
