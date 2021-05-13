import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import FullView from "./components/FullView";
import Thumbnails from "./components/Thumbnails";
import Info from "./components/Info";
import { getRandom, getSingleImage, getRange } from "./nasaApod";
import appTheme from './theme';
import { THUMB_PAGE_COUNT } from "./constants";


//getSingleImage('dd').then(data => console.log(data));
//getRandom(5).then(data => console.log(data));

const ScreenContainer = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
position: fixed;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

function App() {
  const [apods, setApods] = useState([]);
  const [selected, setSelected] = useState();
  const [offset, setOffset] = useState(0);

  const selectImage = (apod) => {
    setSelected(apod);
  };

  /** Don't forget here the the API takes it's offset in terms of "x days ago"
   * The thumbnail page offset expects and requests using positive indexes
   * 0-4 in Thumbnails needs -4DA to 0DA from the API
   * 5-9 in Thumbnails needs -9DA to -5DA from the API
  */
  const changeOffset = (inc) => {
    setOffset(offset + inc);
  };

  useEffect(() => {
    getRange(offset * -1 - THUMB_PAGE_COUNT, offset * -1).then(data => {
      setApods(data.filter(d => d.media_type === "image"));
    }).catch(reason => {
      console.log(reason);
    });

    if (!selected && apods.length > 0)
      setSelected(apods[0]);

  }, [offset]);

  return (
    <ThemeProvider theme={appTheme}>
      <ScreenContainer>
        <Thumbnails apods={apods} selectImage={selectImage} selected={selected} changeOffset={changeOffset} />
        <FullView selected={selected} >hello</FullView>
      </ScreenContainer>
      <div style={{ height: '90vh'}}></div>
      { selected &&
        <Info apod={selected} />
      }
    </ThemeProvider>
  );
}

export default App;
