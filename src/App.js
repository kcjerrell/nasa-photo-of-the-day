import React, { useEffect, useState } from "react";
import "./App.css";
import FullView from "./components/FullView";
import Thumbnails from "./components/Thumbnails";
import { getRandom, getSingleImage, getRange } from "./nasaApod";


//getSingleImage('dd').then(data => console.log(data));
//getRandom(5).then(data => console.log(data));

function App() {
  const [apods, setApods] = useState([]);
  const [selected, setSelected] = useState();

  const selectImage = (apod) => {
    setSelected(apod);
  };

  useEffect(() => {
    getRange(-10).then(data => {
      setApods(data);
    }).catch(reason => {
      console.log(reason);
    });
  }, []);

  return (
    <div>
      <FullView selected={selected}/>
      <Thumbnails apods={apods} selectImage={selectImage} />
    </div>
  );
}

export default App;
