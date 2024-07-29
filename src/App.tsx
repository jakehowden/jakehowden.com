import Header from './components/header';
import Summary from './components/summary';
import Experience from './components/experience';
import Education from './components/education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Summary></Summary>
      <Experience></Experience>
      <Education></Education>
    </div>
  );
}

export default App;