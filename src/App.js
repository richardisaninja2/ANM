import logo from './logo.svg';
import './App.css';
import Images from './components/images/Images';
import Main from './components/main/Main';
import { HashRouter, Route, Routes } from "react-router-dom";
import Portfolio from './components/portfolio/Portfolio';

function App() {
  let homecoming = "homecoming";
  let wedding = "wedding";
  let grad = 'graduation';
  return (
    <div className="App">
      <HashRouter>
          {/* <Images/> */}
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/images" element={<Images/>}/>

            <Route path="/images/homecoming" element={<Images images={homecoming}/>}/>
            <Route path="/images/graduation" element={<Images images={grad}/>}/>
            <Route path="/images/wedding" element={<Images images={wedding}/>}/>
          </Routes>
      </HashRouter>


    </div>
  );
}

export default App;
