import Header from './components/header';
import Summary from './components/summary';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Summary></Summary>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
    </div>
  );
}

export default App;