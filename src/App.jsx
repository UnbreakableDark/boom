import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ZSpace from './pages/Space/ZSpace';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Forgot from "./pages/Forgot/Forgot";
import UserCenter from "./pages/Center/UserCenter";
import ZSearch from "./pages/Search/ZSearch";
import ZAnime from "./pages/Anime/ZAnime";
import ZMusic from "./pages/Music/ZMusic";
import ZComic from "./pages/Comic/ZComic";
import ZMessage from "./pages/Message/ZMessage";
import ZHistory from "./pages/History/ZHistory";


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
