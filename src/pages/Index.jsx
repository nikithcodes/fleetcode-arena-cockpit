
import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { UserProfile } from '../components/UserProfile';
import { BattleQueue } from '../components/BattleQueue';
import { RecentBattles } from '../components/RecentBattles';
import { ProblemRecommendations } from '../components/ProblemRecommendations';

const Index = () => {
  const [isQueuing, setIsQueuing] = useState(false);
  const [matchFound, setMatchFound] = useState(false);

  return (
    <div className="min-h-screen fc-bg-deep">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - User Profile */}
          <div className="lg:col-span-3 space-y-6">
            <UserProfile />
          </div>
          
          {/* Center Column - Battle Queue and Recent Battles */}
          <div className="lg:col-span-6 space-y-6">
            <BattleQueue 
              isQueuing={isQueuing} 
              setIsQueuing={setIsQueuing}
              matchFound={matchFound}
              setMatchFound={setMatchFound}
            />
            <RecentBattles />
          </div>
          
          {/* Right Column - Problem Recommendations (Full Width) */}
          <div className="lg:col-span-3">
            <ProblemRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
