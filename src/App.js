import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var javascript = ["The Good Parts", "Eloquent JavaScript"];
  var SciFi = ["The Magical Book", "The Lost City"];
  var Thriller = ["Dark Matter", "Better Than Best Friends"];

  var details = {
    "The Good Parts": [
      "Rating-4.5/5",
      "Description- The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code"
    ],
    "Eloquent JavaScript": [
      "Rating-4.6/5",
      "Description-Eloquent JavaScript provides a thorough walkthrough of the core aspects of JavaScript as a coding language."
    ],
    "The Magical Book": [
      "Rating-4.2/5",
      "Description-Robert Cruise sets out on his evil journey to acquire Chamaradweep, so that he can conquer the world. But John and his magical book pose as an obstacle"
    ],
    "The Lost City": [
      "Rating-3.7/5",
      "Description-New York Times bestselling author Amanda Hocking returns to the magical world of the Trylle with The Lost City, the first book in the final Trylle arc."
    ],
    "Dark Matter": [
      "Rating-4.1/5",
      "Description-Dark Matter is a book that thrills, horrifies and asks deep philosophical questions. It begins with Jason, a physics professor surrounded by his beloved wife"
    ],
    "Better Than Best Friends": [
      "Rating-4.3/5",
      "Description-More Than His Best Friend is the first book in a passionate and heartwarming young adult romance saga about first loves, close friends, small towns"
    ]
  };

  var [book, setBook] = useState([]);

  function onHandler(item) {
    setBook(item);
  }
  return (
    <div className="App">
      <h1 id="title-name">Good Books 📚</h1>
      <h2>Here are some of my favorite books.Hop into the app and check out</h2>
      <button onClick={() => onHandler(javascript)}>javascript</button>
      <button onClick={() => onHandler(SciFi)}>SciFi</button>
      <button onClick={() => onHandler(Thriller)}>Thriller</button>
      <ul>
        {book.map((books) => {
          return (
            <li key={books} id="heading">
              <div id="title">{books}</div>
              <div id="rating">{details[books][0]}</div>
              <div id="description">{details[books][1]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
