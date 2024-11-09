//original

import { useState } from "react";
import "../styles.css";
import Button from "./Button"; // Correct path to Button.js
import leftarrow from "../Assets/leftarrow.png"; // Correct path to image
import rightarrow from "../Assets/rightarrow.png"; // Correct path to image
import ReactDOM from "react-dom/client";
import Basket from "./Basket";


const AppleContainer = () => {
    let [leftapple,setleftapple]=useState(10);
    let [rightapple,setrightapple]=useState(0);

  let leftfunction = () => {

    if (rightapple > 0) {
      setleftapple(leftapple+1);
      setrightapple(rightapple-1);
      
    }
  };
  let rightfunction = () => {
    if (leftapple > 0) {
        setleftapple(leftapple-1);
      setrightapple(rightapple+1);
    
      
    }
  };

  return (
    <>
      <div>
        <Basket basket="basket1" apple={leftapple} />
        <Button
          onClick={() => {
            leftfunction();
            root.render(<AppleContainer />);
          }}
          imgurl={leftarrow}
        />
      </div>

      <div>
        <Button
          onClick={() => {
            rightfunction();
            root.render(<AppleContainer />);
          }}
          imgurl={rightarrow}
        />
        <Basket basket="basket2" apple={rightapple} />
      </div>
    </>
  );
};

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppleContainer />);
