import React from "react";

export default function Toolbar() {
  const playMusic = () => alert("Music start Playing!");
  const stopMusic = () => alert("Music Stop!");
  return (
    <div>
      <button onClick={playMusic}>Play Music</button>
      <p> </p>
      <button onClick={stopMusic}>Stop Music</button>
    </div>
  );
}
