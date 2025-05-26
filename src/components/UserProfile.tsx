
import React from 'react';
import { TrendingUp, Trophy, Target, Flame } from 'lucide-react';

export const UserProfile = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300">
      {/* Profile Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">CM</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800 animate-pulse"></div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">CodeMaster</h3>
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 rounded-full text-xs font-semibold text-black">
              Elite
            </div>
            <span className="text-gray-400 text-sm">Rank #42</span>
          </div>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-900/50 rounded-lg p-3 text-center hover:bg-gray-900/70 transition-colors">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-white">1,847</div>
          <div className="text-xs text-gray-400">Rating</div>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-3 text-center hover:bg-gray-900/70 transition-colors">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">73%</div>
          <div className="text-xs text-gray-400">Win Rate</div>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-3 text-center hover:bg-gray-900/70 transition-colors">
          <div className="flex items-center justify-center mb-2">
            <Target className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">156</div>
          <div className="text-xs text-gray-400">Battles</div>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-3 text-center hover:bg-gray-900/70 transition-colors">
          <div className="flex items-center justify-center mb-2">
            <Flame className="w-5 h-5 text-red-400" />
          </div>
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-xs text-gray-400">Streak</div>
        </div>
      </div>
      
      {/* Edit Profile Button */}
      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
        Edit Profile
      </button>
    </div>
  );
};
