
import React from 'react';
import { History, Trophy, X, Clock } from 'lucide-react';

export const RecentBattles = () => {
  const battles = [
    {
      opponent: 'ByteNinja',
      result: 'win',
      time: '2 hours ago',
      duration: '12:34',
      problem: 'Two Sum Variants'
    },
    {
      opponent: 'AlgoMaster',
      result: 'loss',
      time: '5 hours ago', 
      duration: '15:22',
      problem: 'Binary Tree Traversal'
    },
    {
      opponent: 'CodeWizard',
      result: 'win',
      time: '1 day ago',
      duration: '09:45',
      problem: 'Dynamic Programming'
    },
    {
      opponent: 'DevHero',
      result: 'win',
      time: '2 days ago',
      duration: '11:12',
      problem: 'Graph Algorithms'
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <History className="w-5 h-5 text-purple-400" />
        <h2 className="text-lg font-bold text-white">Recent Battles</h2>
      </div>
      
      <div className="space-y-4">
        {battles.map((battle, index) => (
          <div key={index} className="bg-gray-900/40 rounded-lg p-4 hover:bg-gray-900/60 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  battle.result === 'win' ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {battle.result === 'win' ? (
                    <Trophy className="w-4 h-4 text-white" />
                  ) : (
                    <X className="w-4 h-4 text-white" />
                  )}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">vs {battle.opponent}</div>
                  <div className="text-gray-400 text-xs">{battle.problem}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold ${
                  battle.result === 'win' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {battle.result.toUpperCase()}
                </div>
                <div className="text-gray-400 text-xs">{battle.time}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{battle.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
