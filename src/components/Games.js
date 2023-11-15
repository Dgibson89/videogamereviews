import React, { useState, useEffect } from 'react';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const response = await fetch('/api/games');
      const data = await response.json();
      setGames(data);
    }

    fetchGames();
  }, []);

  return (
    <div>
      <h2>Games List</h2>
      <ul>
        {games.map(game => (
          <li key={game._id}>{game.title}</li> // Display other details as needed
        ))}
      </ul>
    </div>
  );
}

export default Games;
