import PortfolioCard from "../PortfolioCard/PortfolioCard"
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div className="portfolioMain">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  )
}

export default Portfolio
