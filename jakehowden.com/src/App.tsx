import profileImage from './images/jake-cropped.jpg'
import Summary from './components/summary';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import './App.css';

function App() {
  return (
    <div className="App">
    <img src={profileImage} style={{ width: '150px', height: '125px' }} alt="profile"></img>
      <Summary></Summary>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
    </div>
  );
}

export default App;