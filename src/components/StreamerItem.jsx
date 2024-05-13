import React from 'react';
import '../Styles/StreamerItem.css';


function StreamerItem({ streamer }) {
  return (
    <div className={`streamer-item ${streamer.isLive ? 'live' : 'offline'}`}>
      <h4>{streamer.name}</h4>
      <p>{streamer.game}</p>
      <span>Status: {streamer.isLive ? 'Live' : 'Offline'}</span>
      {streamer.isLive && <span>Viewers: {streamer.viewers}</span>}
      <button>Watch</button>
    </div>
  );
}

export default StreamerItem;
