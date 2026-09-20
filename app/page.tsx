import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Motion from "../components/Motion";
export default function Home() {
  return <><a href="#main" className="skip-link">Skip to content</a><div className="site-shell"><Navigation /><main id="main"><Hero /><Projects /><About /><Skills /><Contact /></main></div><Motion /></>;
}
