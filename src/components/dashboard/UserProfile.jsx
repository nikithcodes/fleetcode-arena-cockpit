
import React from 'react';
import { TrendingUp, Trophy, Target, Flame } from 'lucide-react';

const UserProfile = () => (
  <div className="profile-card">
    <div className="profile-header">
      <div className="profile-avatar-container">
        <div className="profile-avatar">
          <span className="avatar-initials">CM</span>
        </div>
        <div className="online-indicator"></div>
      </div>
      <div className="profile-info">
        <h3 className="profile-name">CodeMaster</h3>
        <div className="profile-badges">
          <div className="elite-badge">Elite</div>
          <span className="rank-text">Rank #42</span>
        </div>
      </div>
    </div>
    
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon">
          <Trophy />
        </div>
        <div className="stat-value">1,847</div>
        <div className="stat-label">Rating</div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">
          <TrendingUp />
        </div>
        <div className="stat-value">73%</div>
        <div className="stat-label">Win Rate</div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">
          <Target />
        </div>
        <div className="stat-value">156</div>
        <div className="stat-label">Battles</div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">
          <Flame />
        </div>
        <div className="stat-value">12</div>
        <div className="stat-label">Streak</div>
      </div>
    </div>
    
    <button className="edit-profile-btn">Edit Profile</button>
  </div>
);

export default UserProfile;
