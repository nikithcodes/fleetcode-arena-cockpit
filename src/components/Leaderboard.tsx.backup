
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
    <div className="fc-bg-card fc-border border fc-shadow rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Crown className="w-6 h-6 fc-text" />
        <h2 className="text-xl font-bold fc-text">Global Leaderboard</h2>
      </div>
      
      <div className="space-y-3">
        {leaderboardData.map((player) => (
          <div
            key={player.rank}
            className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:fc-glow ${
              player.isUser ? 'fc-border border fc-glow' : 'fc-bg-deep'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                player.rank <= 3 ? 'fc-bg-outline fc-text' : 'fc-bg-card fc-text'
              }`}>
                {player.rank}
              </div>
              <div>
                <div className="fc-text font-semibold text-sm">{player.name}</div>
                <div className="fc-text opacity-60 text-xs">{player.rating} pts</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-semibold fc-text ${
                player.trending === 'up' ? 'opacity-100' : 'opacity-60'
              }`}>
                {player.change}
              </span>
              {player.trending === 'up' ? (
                <TrendingUp className="w-4 h-4 fc-text" />
              ) : (
                <TrendingDown className="w-4 h-4 fc-text opacity-60" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
