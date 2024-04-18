import React from 'react';

function LiveNotification({ message }) {
  return (
    <div className="live-notification">
      <p>{message}</p>
    </div>
  );
}

export default LiveNotification;
