import React from "react";
import "./components/styles.css";
import { AnimeList } from  './components/AnimeList'
import { useEffect, useState } from "react";
import {AnimeInfo} from './components/AnimeInfo'


function App() {
  const [search, setSearch]=useState("Naruto");
  const [ animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  
  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=200`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };
  useEffect(() => {
    getData()
  }, [search])


  return (
    <>
      <div className="header">
       
        <div className="search-box">
          <input
            type="search"
            placeholder="search your anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      
      <div className="container">
        <div className="animeInfo">
          <div className="text-heading">
            <h2>Anime Information</h2>
          </div>
        {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
        </div>

        <div className="anime-row">
          <div className="row">
            <AnimeList  
            AnimeList={animeData}
            setAnimeInfo={setAnimeInfo}

            />

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
