
import React from 'react';
import { Crown, TrendingUp, TrendingDown } from 'lucide-react';

export const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'AlgoMaster', rating: 2156, change: '+23', trending: 'up' },
    { rank: 2, name: 'CodeNinja', rating: 2089, change: '+12', trending: 'up' },
    { rank: 3, name: 'ByteWizard', rating: 2045, change: '-5', trending: 'down' },
    { rank: 4, name: 'DevLegend', rating: 1998, change: '+8', trending: 'up' },
    { rank: 5, name: 'ScriptKing', rating: 1967, change: '+15', trending: 'up' },
    { rank: 42, name: 'CodeMaster (You)', rating: 1847, change: '+7', trending: 'up', isUser: true },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Crown className="w-6 h-6 text-yellow-400" />
        <h2 className="text-xl font-bold text-white">Global Leaderboard</h2>
      </div>
      
      <div className="space-y-3">
        {leaderboardData.map((player) => (
          <div
            key={player.rank}
            className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-gray-700/50 ${
              player.isUser ? 'bg-cyan-500/20 border border-cyan-500/30' : 'bg-gray-900/30'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                player.rank === 1 ? 'bg-yellow-500 text-black' :
                player.rank === 2 ? 'bg-gray-400 text-black' :
                player.rank === 3 ? 'bg-amber-600 text-white' :
                'bg-gray-700 text-gray-300'
              }`}>
                {player.rank}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{player.name}</div>
                <div className="text-gray-400 text-xs">{player.rating} pts</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-semibold ${
                player.trending === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {player.change}
              </span>
              {player.trending === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
