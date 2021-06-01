import React, { useEffect, useState } from 'react';
import './App.css';

import reducer from './reducer.js'
import TourList from './components/TourList.js';
import Tour from './components/Tour.js';
import { TourContext } from './TourContext.js';
import sendRequest from './ajaxUtils.js';
import useLoadItems from './hooks/useLoadItems.js';

function App() {
  const url = "https://run.mocky.io/v3/0bd2c3c1-308a-48a6-83fa-5b62ddc74005";
  const [state, setState] = useState([]);
  // const tours = [
  //   {
  //     id: 0,
  //     name: "Hot Polska in 6 Days",
  //     price: "$299",
  //     href: "https://pix10.agoda.net/geo/country/182/3_182_poland_02.jpg?s=1920x"
  //   },
  //   {
  //     id: 1,
  //     name: "Best of Iceland 4 Day Tour",
  //     price: "$619",
  //     href: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/01d0ebb606a2065f0ecc8a3112ec85e67d9b2005/big-69cd90f23b17d410f24ca2af3fb95840.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Nuclear Japan Tour Without the Bombs",
  //     price: "$2,499"
  //   }
  // ];
  //
  // const stringed = JSON.stringify(tours);
  // console.log(stringed);

  // my custom hook
  const data = useLoadItems(url);

  useEffect(() => {
    setState(data);
  }, [data])


  return (
    <TourContext.Provider value={state}>
      <div className="App">
        <TourList />
      </div>
    </TourContext.Provider>
  );
}

export default App;
