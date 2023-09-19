import "./App.css";
import React, {useState} from 'react'
import Navbar from "./Components/Navbar";
import Home_main from "./Components/Home_main";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Characters from "./Components/Characters";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Wong from "./Components/Wong";
import Winter_Soldier from "./Components/Winter_Soldier";
import Iron_Man from "./Components/Iron_Man";
import Captain_America from "./Components/Captain_America";
import Thor from './Components/Thor';
import Ant_Man from "./Components/Ant_Man";
import Black_Panther from "./Components/Black_Panther";
import Black_Widow from "./Components/Black_Widow";
import Captain_Marvel from "./Components/Captain_Marvel";
import Doctor_Strange from "./Components/Doctor_Strange";
import Drax from "./Components/Drax";
import Falcon from "./Components/Falcon";
import Gamora from "./Components/Gamora";
import Groot from "./Components/Groot";
import Hawkeye from "./Components/Hawkeye";
import Hulk from "./Components/Hulk";
import Mantis from "./Components/Mantis";
import Nebula from "./Components/Nebula";
import Quick_Silver from "./Components/Quick_Silver";
import Rocket from "./Components/Rocket";
import Scarlet_Witch from "./Components/Scarlet_Witch";
import Shang_Chi from "./Components/Shang_Chi";
import Spider_Man from "./Components/Spider_Man";
import Star_Lord from "./Components/Star_Lord";
import Vision from "./Components/Vision";
import War_Machine from "./Components/War_Machine";
import Wasp from "./Components/Wasp";

// import LoadingBar from 'react-top-loading-bar'
import Quizz from "./Components/Quizz";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

// import {LoadingProvider} from './Components/LoadingContext'
// import { LoadingContext } from "./Components/LoadingContext";



function App() {
  // localStorage.removeItem('token');
  const [mode, setMode] = useState('light')
  const [progress, setProgress] = useState(0)

  const toggleMode = () => {
    if(mode === 'light'){
      document.body.style.backgroundColor = '#000000db';
      document.body.style.color = 'white';
      setMode('dark')
    }
    else{
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#000000db';
      setMode('light')
    }
  }

  // function Loadingbar() {
  //   const { progress } = useContext(LoadingContext);
  //   return (
  //     <div>
  //       {/* Render your loading bar component using the progress value */}
  //       {/* For example: */}
  //         <LoadingBar
  //         height={3}
  //         color='#f11946'
  //         progress={progress}
  //         onLoaderFinished={() => setProgress(0)}
  //       />
  //       {/* <ProgressBar value={progress} /> */}
  //     </div>
  //   );
  // }
  

  // const hundredProgressBar = () => {
  //   setProgress(100)
  // }
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
       <Router>
         <Navbar toggleMode={toggleMode} mode={mode} />
           {/* <LoadingBar
           height={3}
           color='#f11946'
           progress={progress}
          //  onLoaderFinished={() => setProgress(0)}
         /> */}

        <Routes>
          <Route exact path="/" element={<Home_main setProgress={setProgress} />} />
          <Route exact path="/Login" element={<Login mode={mode} />}/>
          <Route exact path="/Signup" element={<Signup mode={mode} />}/>

          <Route exact path="/Characters" element={<Characters mode={mode} setProgress={setProgress} />}>
            {/* <Route index element={<Characters />} /> */}
            {/* <Route
              path="*"
              element={
                <div className="d-flex">
                  <Characters_ListItems />
                  <Outlet />
                </div>
              }
            ></Route> */}
            {/* <Route exact path="*" element={<Characters_ListItems/>}/> */}

            <Route exact path="/Characters/Wong" element={<Wong />} />
            <Route exact path="/Characters" element={<Iron_Man />} />
            <Route exact path="/Characters/WinterSoldier" element={<Winter_Soldier />} />
            <Route exact path="/Characters/CaptainAmerica" element={<Captain_America />} />
            <Route exact path="/Characters/Thor" element={<Thor />} />
            <Route exact path="/Characters/AntMan" element={<Ant_Man />} />
            <Route exact path="/Characters/BlackPanther" element={<Black_Panther />} />
            <Route exact path="/Characters/BlackWidow" element={<Black_Widow />} />
            <Route exact path="/Characters/CaptainMarvel" element={<Captain_Marvel />} />
            <Route exact path="/Characters/DoctorStrange" element={<Doctor_Strange />} />
            <Route exact path="/Characters/Drax" element={<Drax />} />
            <Route exact path="/Characters/Falcon" element={<Falcon />} />
            <Route exact path="/Characters/Gamora" element={<Gamora />} />
            <Route exact path="/Characters/Groot" element={<Groot />} />
            <Route exact path="/Characters/Hawkeye" element={<Hawkeye />} />
            <Route exact path="/Characters/Hulk" element={<Hulk />} />
            <Route exact path="/Characters/Mantis" element={<Mantis />} />
            <Route exact path="/Characters/Nebula" element={<Nebula />} />
            <Route exact path="/Characters/QuickSilver" element={<Quick_Silver />} />
            <Route exact path="/Characters/Rocket" element={<Rocket />} />
            <Route exact path="/Characters/ScarletWitch" element={<Scarlet_Witch />} />
            <Route exact path="/Characters/ShangChi" element={<Shang_Chi />} />
            <Route exact path="/Characters/SpiderMan" element={<Spider_Man />} />
            <Route exact path="/Characters/StarLord" element={<Star_Lord />} />
            <Route exact path="/Characters/Vision" element={<Vision />} />
            <Route exact path="/Characters/WarMachine" element={<War_Machine />} />
            <Route exact path="/Characters/Wasp" element={<Wasp />} />

            {/* <Route exact path="Wong" element={<Wong />} />
            <Route exact path="IronMan" element={<Iron_Man />} />
            <Route exact path="WinterSoldier" element={<Winter_Soldier />} /> */}
          </Route>

          <Route exact path="/Movies" element={<Movies mode={mode} setProgress={setProgress} />} />
          <Route exact path="/Series" element={<Series setProgress={setProgress} />} />
          <Route exact path="/Quizz" element={<Quizz mode={mode} setProgress={setProgress} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
