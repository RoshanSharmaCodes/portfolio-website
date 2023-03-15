import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./App.css"
import Layout from "./Components/Layout/Layout"

function App() {
  return (
    <div className="App">
      <Layout />
      <div className="socialBounceMenu">
        <a href="https://www.linkedin.com/in/roshancodes/">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" className="navbarSocialIcon" />
        </a>
      </div>
    </div>
  )
}

export default App
