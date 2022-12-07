import '../../App.css';
import Navbar from '../Navbar';
// import Content from '../../services/sw-service.js';
import People from '../People';
import Planets from '../Planets';
import Starships from '../Starships';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route path='/people' element={<People />}></Route>
          <Route path='/planets' element={<Planets />}></Route>
          <Route path='/starships' element={<Starships />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
