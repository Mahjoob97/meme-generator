import React from "react";

function Meme() {
  return (
    <main className="container">
      <form>
        <input type="text" placeholder="Top Text ..."></input>
        <input type="text" placeholder="Bottom Text ..."></input>
        <button type="submit">Get New Meme image 🖼</button>
      </form>
    </main>
  );
}

export default Meme;
