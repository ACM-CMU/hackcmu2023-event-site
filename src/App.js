import './App.css'

import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import FaqPage from './components/FaqPage';
import Prizes from './components/Prizes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Schedule/>
      <FaqPage/>
      <Prizes/>
    </div>
  );
}

export default App;
