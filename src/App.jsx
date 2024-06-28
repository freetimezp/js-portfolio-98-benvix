import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Teams from "./components/teams/Teams";
import Project from "./components/project/Project";
import Testimonial from "./components/testimonial/Testimonial";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Teams />
      <Project />
      <Testimonial />
      <Blog />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
