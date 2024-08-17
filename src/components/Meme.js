import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "",
  });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const imgUrl = memesArray[randomNumber].url;
    setMeme((prevState) => ({ ...prevState, randomImg: imgUrl }));
  }

  return (
    <main className="container">
      <div>
        <input type="text" placeholder="Top Text ..."></input>
        <input type="text" placeholder="Bottom Text ..."></input>
        <button type="submit" onClick={getMemeImage}>
          Get New Meme image 🖼
        </button>
      </div>
      <img src={meme.randomImg} alt="" />
    </main>
  );
}

export default Meme;
