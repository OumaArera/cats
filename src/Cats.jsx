// src/components/Cats.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Cats images
import cat1 from "./images/cat1.jpeg";
import cat2 from "./images/cat2.jpeg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpeg";
import cat5 from "./images/cat5.jpeg";
import cat6 from "./images/cat6.jpeg";
import cat7 from "./images/cat7.jpeg";
import cat8 from "./images/cat8.jpeg";
import cat9 from "./images/cat9.jpeg";
import cat10 from "./images/cat10.jpeg";
import cat11 from "./images/cat11.jpeg";
import cat12 from "./images/cat12.jpeg";
import cat13 from "./images/cat13.jpeg";
import cat14 from "./images/cat14.jpeg";
import cat15 from "./images/cat15.jpeg";
import cat16 from "./images/cat16.jpeg";
import cat17 from "./images/cat17.jpeg";
import cat18 from "./images/cat18.jpeg";
import cat19 from "./images/cat19.jpeg";
import cat20 from "./images/cat20.jpeg";
import cat21 from "./images/cat21.jpeg";
import cat22 from "./images/cat22.jpeg";
import cat23 from "./images/cat23.jpeg";
import cat24 from "./images/cat24.jpeg";
import cat25 from "./images/cat25.jpeg";
import cat26 from "./images/cat26.jpeg";
import cat27 from "./images/cat27.jpeg";
import cat28 from "./images/cat28.jpeg";
import cat29 from "./images/cat29.jpeg";
import cat30 from "./images/cat30.jpeg";

const catImages = [
  cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10,
  cat11, cat12, cat13, cat14, cat15, cat16, cat17, cat18, cat19, cat20,
  cat21, cat22, cat23, cat24, cat25, cat26, cat27, cat28, cat29, cat30
];

const Cats = () => {
  const [catFact, setCatFact] = useState('');
  const [catImage, setCatImage] = useState('');
  const [timer, setTimer] = useState(20);

  const getRandomCatImage = () => {
    const randomIndex = Math.floor(Math.random() * catImages.length);
    return catImages[randomIndex];
  };

  const fetchCatData = async () => {
    try {
      // Fetch the cat fact
      const factResponse = await axios.get('https://catfact.ninja/fact');
      // Set a new random cat image
      const newCatImage = getRandomCatImage();

      // Update state after both actions are completed
      setCatFact(factResponse.data.fact);
      setCatImage(newCatImage);
    } catch (error) {
      console.error('Error fetching cat data:', error);
    }
  };

  useEffect(() => {
    fetchCatData();

    // Set an interval to update the cat fact and image every 20 seconds
    const intervalId = setInterval(() => {
      fetchCatData();
      setTimer(20);
    }, 20000); // 20 seconds

    // Set an interval to update the timer every second
    const countdownIntervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer > 0 ? prevTimer - 1 : 20);
    }, 1000); // 1 second

    return () => {
      clearInterval(intervalId);
      clearInterval(countdownIntervalId);
    }; // Cleanup intervals on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Cat Fact of the Day</h1>
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 relative">
        {catImage && <img src={catImage} alt="Random Cat" className="rounded-lg shadow-md mb-4" />}
        <div className="bg-white bg-opacity-75 rounded-lg p-4">
          {catFact && <p className="text-lg text-gray-700 mb-4 font-semibold italic">{catFact}</p>}
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Next update in: <span className="font-bold">{timer}</span> seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Cats;
