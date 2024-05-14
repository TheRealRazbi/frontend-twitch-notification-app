import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/SettingsPage.css';

function SettingsPage() {
  const [streamerName, setStreamerName] = useState('');
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    fetchStreamers();
  }, []);

  const fetchStreamers = () => {
    axios.get('http://localhost:9620/api/streamers/list')
      .then(response => {
        setStreamers(response.data); 
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
        fetchStreamers();  
        setStreamerName('');  
      })
      .catch(error => {
        console.error('Error adding streamer:', error);
      });
    }
  };
  const handleUnfollow = streamer => {
    axios.delete('/api/streamers/remove', {
      data: { streamers: [streamer] }
    })
    .then(() => {
      fetchStreamers();  // Refresh the list after unfollowing
    })
    .catch(error => {
      console.error('Error removing streamer:', error);
    });
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <p>Manage your notification settings and subscriptions here.</p>
      <form onSubmit={handleAddStreamer} className="add-streamer-form">
        <label htmlFor="streamerName" className="streamer-label">Add Streamer:</label>
        <input
          type="text"
          id="streamerName"
          value={streamerName}
          className="streamer-input"
          onChange={(e) => setStreamerName(e.target.value)}
          placeholder="Enter streamer's name"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      <h3>Followed Streamers:</h3>
      <div className="streamers-container">
        {streamers.map((streamer, index) => (
          <div key={index} className="streamer-card">
            <span className="streamer-name">{streamer}</span>
            <button onClick={() => handleUnfollow(streamer)} className="unfollow-button">Unfollow</button>
        </div>
        ))}
      </div>
    </div>

  );
}

export default SettingsPage;
