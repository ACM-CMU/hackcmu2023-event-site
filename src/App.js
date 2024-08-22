import './App.css'

import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import FaqPage from './components/FaqPage';
import Prizes from './components/Prizes';
import Team from './components/Team';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Schedule/>
      <FaqPage/>
      <Sponsors/>
    </div>
  );
}

export default App;
