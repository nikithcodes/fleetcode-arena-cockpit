
import React from 'react';
import { User, Trophy, Sword, MessageSquare, Settings, LogOut } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Sword className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              FleetCode
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2">
              <span>Dashboard</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>Leaderboard</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Forum</span>
            </a>
          </div>
          
          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm text-gray-300">CodeMaster</div>
              <div className="text-xs text-gray-500">Rank #42</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
