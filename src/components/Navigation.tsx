
import React from 'react';
import { User, Trophy, Sword, MessageSquare, Settings, LogOut } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="fc-bg-card fc-border border-b sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 fc-bg-outline rounded-lg flex items-center justify-center transition-all duration-200 hover:fc-glow">
              <Sword className="w-5 h-5 fc-text" />
            </div>
            <span className="text-2xl font-bold fc-text">
              FleetCode
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="fc-text hover:opacity-80 transition-all duration-200 flex items-center space-x-2 relative group">
              <span>Dashboard</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 fc-bg-outline transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#" className="fc-text opacity-70 hover:opacity-100 transition-all duration-200 flex items-center space-x-2 relative group">
              <Trophy className="w-4 h-4" />
              <span>Leaderboard</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 fc-bg-outline transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#" className="fc-text opacity-70 hover:opacity-100 transition-all duration-200 flex items-center space-x-2 relative group">
              <MessageSquare className="w-4 h-4" />
              <span>Forum</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 fc-bg-outline transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
          
          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 fc-bg-outline rounded-full flex items-center justify-center hover:fc-glow transition-all duration-200">
              <User className="w-5 h-5 fc-text" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm fc-text">CodeMaster</div>
              <div className="text-xs fc-text opacity-60">Rank #42</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
