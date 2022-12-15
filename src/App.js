import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Calendar from "./componemts/Calendar";
import Words from './componemts/Words';
import Slick from './componemts/Slick';


function App() {
  return (
    <div>
     
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/calendar' element={<Calendar />} />
  <Route path='/words' element={<Words />} />
  <Route path='/sliders' element={<Slick />} />
</Routes>


    </div>
  );
}

export default App;
