
import React, { useEffect, useState } from 'react';
import { Sword, Clock, User, MapPin } from 'lucide-react';

interface BattleQueueProps {
  isQueuing: boolean;
  setIsQueuing: (queuing: boolean) => void;
  matchFound: boolean;
  setMatchFound: (found: boolean) => void;
}

export const BattleQueue: React.FC<BattleQueueProps> = ({
  isQueuing,
  setIsQueuing,
  matchFound,
  setMatchFound
}) => {
  const [queueTime, setQueueTime] = useState(0);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isQueuing && !matchFound) {
      interval = setInterval(() => {
        setQueueTime(prev => prev + 1);
        // Simulate finding a match after 5 seconds
        if (queueTime >= 4) {
          setMatchFound(true);
          setCountdown(10);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isQueuing, matchFound, queueTime, setMatchFound]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
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
    <div className="fc-bg-card fc-border border fc-shadow rounded-xl p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold fc-text mb-6 flex items-center justify-center space-x-2">
          <Sword className="w-6 h-6 fc-text" />
          <span>1v1 Battle Arena</span>
        </h2>
        
        {!isQueuing && !matchFound && (
          <div className="space-y-4">
            <p className="fc-text opacity-70 mb-6">Ready to prove your coding skills?</p>
            <button
              onClick={handleQueue}
              className="w-full fc-bg-outline hover:fc-glow fc-text font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 fc-shadow"
            >
              <div className="flex items-center justify-center space-x-2">
                <Sword className="w-5 h-5" />
                <span>Queue for Battle</span>
              </div>
            </button>
          </div>
        )}
        
        {isQueuing && !matchFound && (
          <div className="space-y-6">
            <div className="fc-pulse">
              <div className="w-16 h-16 fc-bg-outline rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 fc-text animate-spin" />
              </div>
              <p className="fc-text font-semibold">Searching for opponent...</p>
              <p className="fc-text opacity-60">Queue time: {queueTime}s</p>
            </div>
            <button
              onClick={handleQueue}
              className="px-6 py-2 fc-bg-deep hover:fc-glow fc-text rounded-lg transition-all duration-200"
            >
              Cancel Queue
            </button>
          </div>
        )}
        
        {matchFound && (
          <div className="space-y-6">
            <div className="fc-border border fc-glow rounded-lg p-4">
              <h3 className="fc-text font-bold text-lg mb-4">Match Found!</h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 fc-bg-outline rounded-full flex items-center justify-center mb-2">
                    <span className="fc-text font-bold">CM</span>
                  </div>
                  <p className="text-sm fc-text">You</p>
                  <p className="text-xs fc-text opacity-60">Rating: 1,847</p>
                </div>
                <div className="fc-text text-2xl font-bold">VS</div>
                <div className="text-center">
                  <div className="w-12 h-12 fc-bg-outline rounded-full flex items-center justify-center mb-2">
                    <User className="w-6 h-6 fc-text" />
                  </div>
                  <p className="text-sm fc-text">ByteNinja</p>
                  <p className="text-xs fc-text opacity-60">Rating: 1,823</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold fc-text mb-2 fc-pulse">{countdown}</div>
                <p className="fc-text opacity-60">Battle starts in...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
