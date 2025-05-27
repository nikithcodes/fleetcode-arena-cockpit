
import React from 'react';
import { Sword, Trophy, MessageCircle, User } from 'lucide-react';

const Navigation = () => (
  <nav className="navigation">
    <div className="nav-container">
      <div className="nav-content">
        <div className="nav-logo">
          <div className="logo-icon">
            <Sword className="logo-sword" />
          </div>
          <span className="logo-text">FleetCode</span>
        </div>
        
        <div className="nav-links">
          <a href="#" className="nav-link active">
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-link">
            <Trophy className="nav-icon" />
            <span>Leaderboard</span>
          </a>
          <a href="#" className="nav-link">
            <MessageCircle className="nav-icon" />
            <span>Forum</span>
          </a>
        </div>
        
        <div className="user-menu">
          <div className="user-avatar">
            <User className="avatar-icon" />
          </div>
          <div className="user-info">
            <div className="username">CodeMaster</div>
            <div className="user-rank">Rank #42</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
