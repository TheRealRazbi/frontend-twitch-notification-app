import React, { useState, useEffect } from 'react';
import StreamerItem from './StreamerItem';
import mockStreamers from '../MockStreamers.json'; // Adjust the path as necessary

function StreamerList() {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    setStreamers(mockStreamers);
  }, []);

  return (
    <div>
      {streamers.map(streamer => (
        <StreamerItem key={streamer.id} streamer={streamer} />
      ))}
    </div>
  );
}

export default StreamerList;
