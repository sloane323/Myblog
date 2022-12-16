import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Calendar from "./componemts/Calendar";
import Words from './componemts/Words';
import Slick from './componemts/Slick';
import Login from './pages/Login';
import HomeLink from './componemts/HomeLink';


function App() {
  return (
    <div>
     <HomeLink />
<Routes>
  <Route path='/' element={<Home />} >
  <Route path='calendar' element={<Calendar />} />
  <Route path='words' element={<Words />} />
  <Route path='sliders' element={<Slick />} /> </ Route>
  <Route path='/login' element={<Login />} />
</Routes>


    </div>
  );
}

export default App;
