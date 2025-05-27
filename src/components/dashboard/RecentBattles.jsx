
import React from 'react';
import { History, Trophy, X } from 'lucide-react';
import './RecentBattles.css';

const RecentBattles = () => {
  const battles = [
    { opponent: 'ByteNinja', result: 'win', time: '2 hours ago', duration: '12:34', problem: 'Two Sum Variants' },
    { opponent: 'AlgoMaster', result: 'loss', time: '5 hours ago', duration: '15:22', problem: 'Binary Tree Traversal' },
    { opponent: 'CodeWizard', result: 'win', time: '1 day ago', duration: '09:45', problem: 'Dynamic Programming' },
    { opponent: 'DevHero', result: 'win', time: '2 days ago', duration: '11:12', problem: 'Graph Algorithms' }
  ];

  return (
    <div className="battles-card">
      <div className="battles-header">
        <History className="history-icon" />
        <h2>Recent Battles</h2>
      </div>
      
      <div className="battles-list">
        {battles.map((battle, index) => (
          <div key={index} className="battle-item">
            <div className="battle-info">
              <div className={`battle-result ${battle.result}`}>
                {battle.result === 'win' ? <Trophy className="result-icon" /> : <X className="result-icon" />}
              </div>
              <div className="battle-details">
                <div className="battle-opponent">vs {battle.opponent}</div>
                <div className="battle-problem">{battle.problem}</div>
              </div>
            </div>
            <div className="battle-meta">
              <div className={`battle-outcome ${battle.result}`}>
                {battle.result.toUpperCase()}
              </div>
              <div className="battle-time">{battle.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBattles;
