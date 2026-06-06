import { useState } from "react";
import "./App.css";

function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"></Square>
        <Square value="2"></Square>
        <Square value="3"></Square>
      </div>
      <div className="board-row">
        <Square value="4"></Square>
        <Square value="5"></Square>
        <Square value="6"></Square>
      </div>
      <div className="board-row">
        <Square value="7"></Square>
        <Square value="8"></Square>
        <Square value="9"></Square>
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    console.log("clicked");
  }
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

export default Board;
