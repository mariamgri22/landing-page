import { AnimateOnScroll } from "animate-on-scroll-framer";
import "./App.scss";
import Cards from "./components/Cards";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import Price from "./components/Price";
import Time from "./components/Time";

function App() {
  return (
    <div className="wrap">
      <div className="wrapper">
        <NavBar />
        <Home />
        <Price />
        <AnimateOnScroll duration={2} delay={1} animation="flipIn">
          <Cards />
        </AnimateOnScroll>
        <Time />
        <Company />
      </div>
      <Footer />
    </div>
  );
}

export default App;
