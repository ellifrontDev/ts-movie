import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import NowPlaying from "./components/NowPlaying";
import {Route, Routes} from "react-router-dom";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import DetailPage from "./components/detailPage/DetailPage";
import MovieBioPage from "./components/actorsPage/moreDetailPage/MovieBioPage";
import Search from "./components/search/Search";

function App() {

    const [light,setLight]:any = useState(false)
    function getDark (){
        setLight(!light)
    }

  return (
    <div className="App" style={{
        display: light ? "red" : '',
        color: light ? "white" :''
    }}>
      <Header/>
        <Routes>
            <Route path={'/'} element={<Popular/>}/>
            <Route path={'/now-playing'} element={<NowPlaying/>}/>
            <Route path={'/top-rated'} element={<TopRated/>}/>
            <Route path={'/detail/:detailId'} element={<DetailPage/>}/>
            <Route path={'/more/:moreId'} element={<MovieBioPage/>}/>
            <Route path={'/search/:searchId'} element={<Search/>}/>
        </Routes>
    </div>
  );
}

export default App;