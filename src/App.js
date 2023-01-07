import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home'
import Blog from './Pages/Blog';
import MehrInfo from './Components/MoreInfo/MehrInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blog />} />

          <Route path='/moreRead/:id' element={<MehrInfo />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
