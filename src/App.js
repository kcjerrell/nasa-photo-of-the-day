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
  const [startOffset, setStartOffset] = useState(-9);

  const selectImage = (apod) => {
    setSelected(apod);
  };

  const loadMore = () => {
    setStartOffset(startOffset - 10);
  };

  useEffect(() => {
    getRange(startOffset, startOffset + 9).then(data => {
      setApods(apods.concat(data));
      if (!selected)
        setSelected(apods[0]);
    }).catch(reason => {
      console.log(reason);
    });
  }, [startOffset]);

  return (
    <div>
      <FullView selected={selected}/>
      <Thumbnails apods={apods} selectImage={selectImage} selected={selected} loadMore={loadMore}/>
    </div>
  );
}

export default App;
