import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Medicines from './pages/Medicines';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
return(
  <div className='App'>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/menu' element={<Medicines />} />

    </Routes>
    </Router>
  </div>
);
}

export default App;
