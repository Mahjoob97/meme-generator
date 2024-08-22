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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Top Text ..."
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom Text ..."
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button type="submit" onClick={getMemeImage}>
          Get New Meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} alt="memeImage" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
