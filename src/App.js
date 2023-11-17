import React, { useState } from "react";
import Header from "./components/Header"; // Import Header component
import Games from "./components/Games"; // Import Games component
import AddReview from "./components/AddReview"; // Import AddReview component
import Reviews from "./components/Reviews"; // Import Reviews component
import Footer from "./components/Footer"; // Import Footer component

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

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
            <img src={selectedGame.background_image} alt={selectedGame.name} />
            <h2>{selectedGame.name}</h2>
            <div className="game-screenshots">
              {selectedGame && selectedGame.screenshots && (
                <div className="game-screenshots">
                  {selectedGame.screenshots.map((screenshot) => (
                    <img
                      key={screenshot.id}
                      src={screenshot.image}
                      alt="Screenshot"
                    />
                  ))}
                </div>
              )}
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
