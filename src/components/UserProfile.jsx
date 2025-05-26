
import React from 'react';
import { TrendingUp, Trophy, Target, Flame } from 'lucide-react';

export const UserProfile = () => {
  return (
    <div className="fc-bg-card fc-border border fc-shadow rounded-xl p-6 hover:fc-glow transition-all duration-300">
      {/* Profile Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 fc-bg-outline rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold fc-text">CM</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 fc-bg-outline rounded-full fc-border border-2 fc-pulse"></div>
        </div>
        <div>
          <h3 className="text-xl font-bold fc-text">CodeMaster</h3>
          <div className="flex items-center space-x-2">
            <div className="fc-bg-outline px-2 py-1 rounded-full text-xs font-semibold fc-text">
              Elite
            </div>
            <span className="fc-text opacity-60 text-sm">Rank #42</span>
          </div>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="fc-bg-deep rounded-lg p-3 text-center hover:fc-glow transition-all duration-200">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="w-5 h-5 fc-text" />
          </div>
          <div className="text-2xl font-bold fc-text">1,847</div>
          <div className="text-xs fc-text opacity-60">Rating</div>
        </div>
        <div className="fc-bg-deep rounded-lg p-3 text-center hover:fc-glow transition-all duration-200">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-5 h-5 fc-text" />
          </div>
          <div className="text-2xl font-bold fc-text">73%</div>
          <div className="text-xs fc-text opacity-60">Win Rate</div>
        </div>
        <div className="fc-bg-deep rounded-lg p-3 text-center hover:fc-glow transition-all duration-200">
          <div className="flex items-center justify-center mb-2">
            <Target className="w-5 h-5 fc-text" />
          </div>
          <div className="text-2xl font-bold fc-text">156</div>
          <div className="text-xs fc-text opacity-60">Battles</div>
        </div>
        <div className="fc-bg-deep rounded-lg p-3 text-center hover:fc-glow transition-all duration-200">
          <div className="flex items-center justify-center mb-2">
            <Flame className="w-5 h-5 fc-text" />
          </div>
          <div className="text-2xl font-bold fc-text">12</div>
          <div className="text-xs fc-text opacity-60">Streak</div>
        </div>
      </div>
      
      {/* Edit Profile Button */}
      <button className="w-full fc-bg-outline hover:fc-glow fc-text font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 fc-shadow">
        Edit Profile
      </button>
    </div>
  );
};
