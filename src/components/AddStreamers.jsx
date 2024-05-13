import React, { useState } from 'react';

function Settings({ onSave }) {
  const [streamerName, setStreamerName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(streamerName);
    setStreamerName(''); // Clear the input after saving
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Streamer:
        <input
          type="text"
          value={streamerName}
          onChange={(e) => setStreamerName(e.target.value)}
          placeholder="Enter streamer's name"
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default Settings;
