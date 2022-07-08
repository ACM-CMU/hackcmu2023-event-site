import './App.css'

import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import Faq from './components/Faq';
import Prizes from './components/Prizes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Schedule/>
      <Faq/>
      <Prizes/>
    </div>
  );
}

export default App;
