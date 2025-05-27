
import React, { useState } from 'react';
import Navigation from './dashboard/Navigation';
import UserProfile from './dashboard/UserProfile';
import BattleQueue from './dashboard/BattleQueue';
import RecentBattles from './dashboard/RecentBattles';
import ProblemRecommendations from './dashboard/ProblemRecommendations';
import './dashboard/Dashboard.css';

const Dashboard = () => {
  const [isQueuing, setIsQueuing] = useState(false);
  const [matchFound, setMatchFound] = useState(false);

  return (
    <div className="dashboard">
      <Navigation />
      
      <div className="dashboard-container">
        <div className="dashboard-grid">
          <div className="left-column">
            <UserProfile />
          </div>
          
          <div className="center-column">
            <BattleQueue 
              isQueuing={isQueuing}
              setIsQueuing={setIsQueuing}
              matchFound={matchFound}
              setMatchFound={setMatchFound}
            />
            <RecentBattles />
          </div>
          
          <div className="right-column">
            <ProblemRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
