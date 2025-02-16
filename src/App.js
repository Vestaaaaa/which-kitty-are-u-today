import React, { useEffect, useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const memes = [
    require("./photos/gifCat1.webm"),
    require("./photos/gifCat2.webm"),
    require("./photos/gifCat3.webm"),
    require("./photos/gifCat4.webm"),
    require("./photos/gifCat5.webm"),
    require("./photos/gifCat6.webm"),
    require("./photos/gifCat7.webm"),
    require("./photos/gifCat8.webm"),
    require("./photos/gifCat9.webm"),
    require("./photos/gifCat10.webm"),
    require("./photos/gifCat11.webm"),
    require("./photos/gifCat12.webm"),
    require("./photos/gifCat13.webm"),
  ];

  const affirmations = [
    "Who is wiser: philosophers or cats?",
    "When every single human being is like a cat at noon, on that day the world will be perfect",
    "Cats don't ask, they take what they need",
    "Mood: I'll have a cappuccino and a kitty",
    "People who can't stand cats were mice in a past life",
    "Fear the one the cat obeys, he has something of magic in him.",
    "Time spent with a cat is never wasted",
    "If there is a cat, no other jewelry is needed",
    "Never give up and embarrass yourself to the end!!",
    "Man is only as cultured as he is able to understand the cat",
    "Even if we're at the bottom, we're STARfish.",
    "Calm down and purr purr",
  ];

  const [memeImage, setMemeImage] = useState("");
  const [affirmation, setAffirmation] = useState("");

  const fetchMemeImageAndAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomAffirmation = Math.floor(Math.random() * affirmations.length);

    setMemeImage(memes[randomIndex]);
    setAffirmation(affirmations[randomAffirmation]);
  };

  useEffect(() => {
    fetchMemeImageAndAffirmation();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Which kitty are u today?</h1>
        {memeImage && (
          <video
            src={memeImage}
            alt="Random Cat"
            style={{ width: "400px", height: "400px" }}
            autoPlay
            loop
            muted
            preload="metadata"
          />
        )}
        {memeImage && <p>{affirmation}</p>}
        <div>
          <button class="button" onClick={fetchMemeImageAndAffirmation}>
            Meow
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
