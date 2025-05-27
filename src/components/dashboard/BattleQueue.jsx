
import React, { useEffect, useState } from 'react';
import { Sword, Clock, User } from 'lucide-react';
import './BattleQueue.css';

const BattleQueue = ({ isQueuing, setIsQueuing, matchFound, setMatchFound }) => {
  const [queueTime, setQueueTime] = useState(0);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let interval;
    if (isQueuing && !matchFound) {
      interval = setInterval(() => {
        setQueueTime(prev => prev + 1);
        if (queueTime >= 4) {
          setMatchFound(true);
          setCountdown(10);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isQueuing, matchFound, queueTime, setMatchFound]);

  useEffect(() => {
    let interval;
    if (matchFound && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [matchFound, countdown]);

  const handleQueue = () => {
    if (isQueuing) {
      setIsQueuing(false);
      setQueueTime(0);
      setMatchFound(false);
      setCountdown(0);
    } else {
      setIsQueuing(true);
      setQueueTime(0);
    }
  };

  return (
    <div className="battle-queue-card">
      <div className="queue-content">
        <h2 className="queue-title">
          <Sword className="title-icon" />
          <span>1v1 Battle Arena</span>
        </h2>
        
        {!isQueuing && !matchFound && (
          <div className="queue-ready">
            <p className="queue-subtitle">Ready to prove your coding skills?</p>
            <button onClick={handleQueue} className="queue-btn">
              <div className="btn-content">
                <Sword className="btn-icon" />
                <span>Queue for Battle</span>
              </div>
            </button>
          </div>
        )}
        
        {isQueuing && !matchFound && (
          <div className="queue-searching">
            <div className="searching-animation">
              <div className="search-icon">
                <Clock className="spinning-clock" />
              </div>
              <p className="search-text">Searching for opponent...</p>
              <p className="queue-time">Queue time: {queueTime}s</p>
            </div>
            <button onClick={handleQueue} className="cancel-btn">
              Cancel Queue
            </button>
          </div>
        )}
        
        {matchFound && (
          <div className="match-found">
            <div className="match-container">
              <h3 className="match-title">Match Found!</h3>
              <div className="vs-container">
                <div className="player">
                  <div className="player-avatar">
                    <span className="player-initials">CM</span>
                  </div>
                  <p className="player-name">You</p>
                  <p className="player-rating">Rating: 1,847</p>
                </div>
                <div className="vs-text">VS</div>
                <div className="player">
                  <div className="player-avatar">
                    <User className="player-icon" />
                  </div>
                  <p className="player-name">ByteNinja</p>
                  <p className="player-rating">Rating: 1,823</p>
                </div>
              </div>
              <div className="countdown-container">
                <div className="countdown-number">{countdown}</div>
                <p className="countdown-text">Battle starts in...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BattleQueue;
