/**
 *
 * basic structre- left and right btn, img at middele,, sand the indicator
 *
 *
 *
 */

import { useEffect, useState } from "react";
import "./image.modeule.css";

export const Caresol = ({ imageData, autoIncrement = true }) => {
  const [indexValue, setIndexValue] = useState(0);
  const [selected, setSelected] = useState(null);

  console.log("indexvalue", indexValue);
  const handleRight = () => {
    // - inc index till length of origial array- if it reaches last ele - set index to 0

    // if (imageData !== undefined) {
    if (indexValue === imageData.length - 1) {
      setIndexValue(0);
    } else {
      setIndexValue((index) => index + 1);
    }
    // }
  };

  const handleLeft = () => {
    // - inc index till length of origial array- if it reaches last ele - set index to 0
    // reserve- no negative index
    if (indexValue === Number(0)) {
      setIndexValue(imageData.length - 1);
    } else {
      setIndexValue((index) => index - 1);
    }
  };

  const jumpToIndex = (index) => {
    console.log("index---------------", index);
    setSelected(index);
    setIndexValue(index);
  };

  //   useEffect(() => {
  //     const id = handleAutoIncrement();
  //     return () => id;
  //   }, []);

  return (
    <div>
      <div className="caresol-cintainer">
        <div className="left">
          <button onClick={handleLeft}>{"<"}</button>
        </div>

        <div className="image">
          <img src={imageData[indexValue]?.imageUrl} alt="img" />
        </div>
        <div className="right">
          <button onClick={handleRight}>{">"}</button>
        </div>
      </div>

      <div className="index-indicator">
        {[...imageData].map((data, i) => (
          <span
            onClick={() => jumpToIndex(i)}
            className={selected === i ? "selected" : ""}
            key={i}
          >
            {"."}
          </span>
        ))}
      </div>
    </div>
  );
};
