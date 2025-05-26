
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
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center space-x-2">
          <Sword className="w-6 h-6 text-cyan-400" />
          <span>1v1 Battle Arena</span>
        </h2>
        
        {!isQueuing && !matchFound && (
          <div className="space-y-4">
            <p className="text-gray-400 mb-6">Ready to prove your coding skills?</p>
            <button
              onClick={handleQueue}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
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
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white animate-spin" />
              </div>
              <p className="text-white font-semibold">Searching for opponent...</p>
              <p className="text-gray-400">Queue time: {queueTime}s</p>
            </div>
            <button
              onClick={handleQueue}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Cancel Queue
            </button>
          </div>
        )}
        
        {matchFound && (
          <div className="space-y-6">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
              <h3 className="text-green-400 font-bold text-lg mb-4">Match Found!</h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold">CM</span>
                  </div>
                  <p className="text-sm text-white">You</p>
                  <p className="text-xs text-gray-400">Rating: 1,847</p>
                </div>
                <div className="text-red-400 text-2xl font-bold">VS</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-white">ByteNinja</p>
                  <p className="text-xs text-gray-400">Rating: 1,823</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{countdown}</div>
                <p className="text-gray-400">Battle starts in...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
