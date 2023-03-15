import "./Home.css"
import Blob from "../../Assets/Blob.svg"

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeLeftDiv">


        <div className="homeLeftTop"></div>
        <div className="homeLeftDown">
        <span className="homeBodyOTag">&lt;body&gt;</span>
        <span className="homeBodyCTag">&lt;/body&gt;</span>
          <div className="introSectionDiv">
            <div className="introSectionMain">
            <span className="introText">Hello ,</span>
            <br />
            <span className="introText">
              I'm <span className="nameText">Roshan Kumar Sharma</span>
            </span>
            <br />
            <span className="subTitleHome">Full Stack Dev / DevOps & Cloud / Technical Content Writer</span><br/>
            </div>
            <div className="homeContactDiv"><button className="homeContactBtn">Contact</button><button className="homeContactBtn"> Resume</button></div>
          </div>
        </div>
      </div>
      <div className="homeRightDiv">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
      <div className="line5"></div>
      <div className="line6"></div>
      <div className="line7"></div>
      <div className="line8"></div>
      <div className="line9"></div>
        <div className="homeBlobSVGDiv">
          <img src={Blob} className="blobHomeSVG" />
        </div>
      </div>
    </div>
  )
}

export default Home
