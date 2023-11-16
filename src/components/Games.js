import React, { useState, useEffect } from 'react';
import '../styles/Games.css'

function Games({ onGameSelect }) {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=YOUR_API_KEY`);
        const data = await response.json();
        setGames(data.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }
    fetchGames();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?search=${search}&key=f3ee281e8bd847168906de9894a8d5af`);
      const data = await response.json();
      setGames(data.results);
    } catch (error) {
      console.error('Error searching games:', error);
    }
  };

  return (
    
      <div>
    <div className="search-container">
      <input 
        type="text" 
        value={search} 
        onChange={handleSearchChange} 
        className="search-input" 
        placeholder="Search games..." 
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>

    <div className="games-grid">
      {games.map(game => (
        <li key={game.id} className="game-item" onClick={() => onGameSelect(game.id)}>
          <img src={game.background_image} alt={game.name} className="game-img" />
          <p className="game-title">{game.name}</p>
        </li>
      ))}
    </div>
  </div>
  );
}

export default Games;
