import React, { useState } from "react";
import word from "./wordList.json";
import Keyboard from "./Keyboard"
import HangmanDrawing from "./HangmanDrawing ";
import HangmanWord from "./HangmanWord";
import backgroundImg from "./assets/wood.webp"
const App = () => {
  const [wordGusse, setWordGusse] = useState(() => {
    return word[Math.floor(Math.random() * word.length)];
  });
  const [gussedLetter, setgussedLetter] = useState<string[]>([]);
  console.log(wordGusse);
  return (

    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
        maxWidth: "800PX",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          alignItems: "center",
        }}
      >
        lose Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard/>
    </div>
  );
};

export default App;
