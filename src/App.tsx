import Header from "./components/header";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Education from "./components/education";
import ImageGrid from "./components/image-grid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ImageGrid></ImageGrid>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Education></Education>
    </div>
  );
}

export default App;
