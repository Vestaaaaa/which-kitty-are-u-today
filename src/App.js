import React, { useEffect, useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const memes = [
    require("./photos/catPic1.jpg"),
    require("./photos/catPic2.jpg"),
    require("./photos/catPic3.jpg"),
    require("./photos/catPic4.jpg"),
    require("./photos/catPic5.jpg"),
    require("./photos/catPic6.jpg"),
    require("./photos/catPic7.jpg"),
    require("./photos/catPic9.jpg"),
    require("./photos/catPic10.jpg"),
    require("./photos/catPic11.jpg"),
    require("./photos/catPic12.jpg"),
    require("./photos/catPic13.jpg"),
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
          <img
            src={memeImage}
            alt="Random Cat"
            style={{ width: "400px", height: "400px" }}
          />
        )}
        {memeImage && (
          <p>{affirmation}</p> // Здесь добавляем ваше утверждение
        )}
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
