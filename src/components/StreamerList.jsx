import React, { useState, useEffect } from 'react';
import StreamerItem from './StreamerItem';
import axios from 'axios';

function StreamerList() {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9620/api/streamers/live', {
        });
        console.log(response.data);
        const updatedStreamers = response.data.map(streamer => ({
          ...streamer,
          url: `https://www.twitch.tv/${streamer.user_name}`
        }));
        setStreamers(updatedStreamers);  
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {streamers.map(streamer => (
        <StreamerItem key={streamer.id} streamer={{
          id: streamer.id,
          name: streamer.user_name, 
          game: streamer.game_name, 
          isLive: streamer.type, 
          viewers: streamer.viewer_count,
          url: streamer.url
        }} />
      ))}
    </div>
  );
}

export default StreamerList;
