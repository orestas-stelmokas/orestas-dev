import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import UnderConstructionPage from "./UnderConstructionPage";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/under-construction-page.css";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <UnderConstructionPage />
    </div>
  );
}

export default Home;
