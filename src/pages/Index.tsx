
import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { UserProfile } from '../components/UserProfile';
import { BattleQueue } from '../components/BattleQueue';
import { Leaderboard } from '../components/Leaderboard';
import { FriendsList } from '../components/FriendsList';
import { RecentBattles } from '../components/RecentBattles';
import { ProblemRecommendations } from '../components/ProblemRecommendations';

const Index = () => {
  const [isQueuing, setIsQueuing] = useState(false);
  const [matchFound, setMatchFound] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            <UserProfile />
            <FriendsList />
          </div>
          
          {/* Center Column */}
          <div className="lg:col-span-6 space-y-6">
            <BattleQueue 
              isQueuing={isQueuing} 
              setIsQueuing={setIsQueuing}
              matchFound={matchFound}
              setMatchFound={setMatchFound}
            />
            <RecentBattles />
            <ProblemRecommendations />
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-3">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
