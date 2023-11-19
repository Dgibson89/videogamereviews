import React, { useState } from "react";
import Header from "./components/Header"; // Import Header component
import Games from "./components/Games"; // Import Games component
import AddReview from "./components/AddReview"; // Import AddReview component
import Reviews from "./components/Reviews"; // Import Reviews component
import Footer from "./components/Footer"; // Import Footer component

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  // Function to handle game selection and fetch game details
  const handleGameSelect = async (gameId) => {
    try {
      // Fetching game details
      const detailsResponse = await fetch(
        `https://api.rawg.io/api/games/${gameId}?key=f3ee281e8bd847168906de9894a8d5af`
      );
      const detailsData = await detailsResponse.json();

      // Fetching game screenshots
      const screenshotsResponse = await fetch(
        `https://api.rawg.io/api/games/${gameId}/screenshots?key=f3ee281e8bd847168906de9894a8d5af`
      );
      const screenshotsData = await screenshotsResponse.json();

      // Combine details and screenshots into one object
      const selectedGameData = {
        ...detailsData,
        screenshots: screenshotsData.results, // Assuming 'results' contains the screenshots array
      };

      setSelectedGame(selectedGameData);
    } catch (error) {
      console.error("Error fetching game details and screenshots:", error);
    }
  };

  const handleLeftArrowClick = () => {
    // Ensure the index doesn't go below zero
    setScreenshotIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleRightArrowClick = () => {
    // Ensure the index doesn't exceed the length of the screenshots array
    setScreenshotIndex((prevIndex) =>
      Math.min(prevIndex + 3, selectedGame.screenshots.length - 3)
    );
  };

  const appStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto", // Header, content, footer
    minHeight: "100vh", // Full viewport height
  };

  return (
    <div style={appStyle}>
      <Header />
      <Games onGameSelect={handleGameSelect} />
      {selectedGame && (
        <div>
          <div className="selected-game-container">
            <img className="selected-game-image" src={selectedGame.background_image} alt={selectedGame.name} />
            <h2>{selectedGame.name}</h2>

            <div className="game-screenshots">
              <button onClick={handleLeftArrowClick}>&lt;</button>
              {selectedGame.screenshots
                .slice(screenshotIndex, screenshotIndex + 3)
                .map((screenshot) => (
                  <img
                    key={screenshot.id}
                    src={screenshot.image}
                    alt="Screenshot"
                  />
                ))}
              <button onClick={handleRightArrowClick}>&gt;</button>
            </div>

            <div className="game-details">
              <p>{selectedGame.description_raw}</p>
            </div>
          </div>

          <AddReview gameId={selectedGame.id} />
          <Reviews gameId={selectedGame.id} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
