import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ZSpace from './pages/space/ZSpace';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Forgot from "./pages/forgot/Forgot";
import UserCenter from "./pages/center/UserCenter";
import ZSearch from "./pages/search/ZSearch";
import ZAnime from "./pages/anime/ZAnime";
import ZMusic from "./pages/music/ZMusic";
import ZComic from "./pages/comic/ZComic";
import ZMessage from "./pages/mseeage/ZMessage";
import ZHistory from "./pages/histoty/ZHistory";


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
