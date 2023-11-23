import logo from './logo.svg';
import './App.css';
import Images from './components/images/Images';
import Main from './components/main/Main';
import { HashRouter, Route, Routes } from "react-router-dom";
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <HashRouter>
          {/* <Images/> */}
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path="/images" element={<Portfolio/>}/>
          </Routes>
      </HashRouter>


    </div>
  );
}

export default App;
