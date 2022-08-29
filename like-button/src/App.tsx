import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {

  const [count, setCount] = useState(999); // countには999が代入され、setCountにはcountの値を変更する関数が代入される。
  const handleClick = () => {
    setCount(count + 1); // 現在のcountの値に1を足した値をsetCount関数に渡す
  };
  return(
    <span className="likeButton" onClick={handleClick}>♥ {count}</span>
  );
}

export default App;
