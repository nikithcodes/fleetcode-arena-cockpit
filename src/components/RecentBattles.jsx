
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
    <div className="fc-bg-card fc-border border fc-shadow rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <History className="w-5 h-5 fc-text" />
        <h2 className="text-lg font-bold fc-text">Recent Battles</h2>
      </div>
      
      <div className="space-y-4">
        {battles.map((battle, index) => (
          <div key={index} className="fc-bg-deep rounded-lg p-4 hover:fc-glow transition-all duration-200 cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center fc-bg-outline`}>
                  {battle.result === 'win' ? (
                    <Trophy className="w-4 h-4 fc-text" />
                  ) : (
                    <X className="w-4 h-4 fc-text" />
                  )}
                </div>
                <div>
                  <div className="fc-text font-semibold text-sm">vs {battle.opponent}</div>
                  <div className="fc-text opacity-60 text-xs">{battle.problem}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold fc-text ${
                  battle.result === 'win' ? 'opacity-100' : 'opacity-70'
                }`}>
                  {battle.result.toUpperCase()}
                </div>
                <div className="fc-text opacity-60 text-xs">{battle.time}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs fc-text opacity-60">
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
