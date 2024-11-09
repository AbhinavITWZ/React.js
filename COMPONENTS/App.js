import React, { useState } from 'react';
import ReactDOM from "react-dom/client"
import './styles.css';
import Basket from './components/Basket';
import Button from './components/Button';
import leftArrow from './Assets/leftarrow.png'; // Add your own arrow images
import rightArrow from './Assets/rightarrow.png'; // Add your own arrow images

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root container

const App = () => {
  const [leftAppleCount, setLeftAppleCount] = useState(10);
  const [rightAppleCount, setRightAppleCount] = useState(0);

  const moveAppleToLeft = () => {
    if (rightAppleCount > 0) {
      setLeftAppleCount((prev) => prev + 1);
      setRightAppleCount((prev) => prev - 1);
    }
  };

  const moveAppleToRight = () => {
    if (leftAppleCount > 0) {
      setLeftAppleCount((prev) => prev - 1);
      setRightAppleCount((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Basket appleCount={leftAppleCount} title="Basket 1" />
        <Button onClick={moveAppleToLeft} imgUrl={leftArrow} />
        <Button onClick={moveAppleToRight} imgUrl={rightArrow} />
        <Basket appleCount={rightAppleCount} title="Basket 2" />
      </div>
    </div>
  );
};
root.render(<App />);


export default App;
