import './App.css';
import About from './Components/About';
import WorkSamples from './Components/WorkSamples';
import ContactInformation from './Components/ContactInformation';
import {Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">    
    <div className='menu'>
    <NavLink to='/about'> About</NavLink>
      <NavLink to='/worksample'> Work Samples</NavLink>
      <NavLink to='/contactinformation'> Contact Information</NavLink>
    </div>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/worksample' element={<WorkSamples />} />
        <Route path='/contactinformation' element={<ContactInformation />} />
      </Routes>
    </div>
  );
}

export default App;
