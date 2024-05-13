import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SettingsPage() {
  const [streamerName, setStreamerName] = useState('');
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    fetchStreamers();
  }, []);

  // Function to fetch streamers from the backend
  const fetchStreamers = () => {
    axios.get('http://localhost:9620/api/streamers/list')
      .then(response => {
        setStreamers(response.data); // Assume response data is structured { streamers: [] }
      })
      .catch(error => console.error('Failed to fetch streamers:', error));
  };

  const handleAddStreamer = (event) => {
    event.preventDefault();
    if (streamerName && !streamers.includes(streamerName)) {
      axios.post('http://localhost:9620/api/streamers/add', {
        streamers: [streamerName]
      })
      .then(() => {
        fetchStreamers();  // Refetch the streamers from the backend to update the UI
        setStreamerName('');  // Clear the input field
      })
      .catch(error => {
        console.error('Error adding streamer:', error);
      });
    }
  };

  return (
    <div>
      <h2>Settings</h2>
      <p>Manage your notification settings and subscriptions here.</p>
      <form onSubmit={handleAddStreamer}>
        <label htmlFor="streamerName">Add Streamer:</label>
        <input
          type="text"
          id="streamerName"
          value={streamerName}
          onChange={(e) => setStreamerName(e.target.value)}
          placeholder="Enter streamer's name"
        />
        <button type="submit">Add</button>
      </form>
      <h3>Followed Streamers:</h3>
      <ul>
        {streamers.map((streamer, index) => (
          <li key={index}>{streamer}</li>
        ))}
      </ul>
    </div>
  );
}

export default SettingsPage;
