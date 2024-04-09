
interface Streamer {
    id: string;
    name: string;
    title: string;
    gameName: string;
    gameIconUrl: string;
  }
  
  interface StreamerCardProps {
    streamer: Streamer;
  }
  
  const StreamerCard: React.FC<StreamerCardProps> = ({ streamer }) => {
    return (
      <div className="card">
        <img src={streamer.gameIconUrl} alt={streamer.gameName} className="game-icon" />
        <div className="streamer-info">
          <h3>{streamer.name}</h3>
          <p>{streamer.title}</p>
          <span>{streamer.gameName}</span>
        </div>
      </div>
    );
  };
  
  export default StreamerCard;
  