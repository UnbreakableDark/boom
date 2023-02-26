import './CSS/App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Forgot from './Forgot';
import UserCenter from './UserCenter';
import ZSearch from './ZSearch';
import ZAnime from './ZAnime';
import ZComic from './ZComic';
import ZMusic from './ZMusic';
import ZMessage from './ZMessage';
import ZHistory from './ZHistory';
import ZSpace from './ZSpace';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path="/space" element={<ZSpace/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/forgot" element={<Forgot/>}></Route>
            <Route path="/center" element={<UserCenter/>}></Route>
            <Route path="/search" element={<ZSearch/>}></Route>
            <Route path="/anime" element={<ZAnime/>}></Route>
            <Route path="/music" element={<ZMusic/>}></Route>
            <Route path="/comic" element={<ZComic/>}></Route>
            <Route path="/message" element={<ZMessage/>}></Route>
            <Route path="/history" element={<ZHistory/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
