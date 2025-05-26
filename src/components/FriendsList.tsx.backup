
import React from 'react';
import { Users, MessageCircle, Sword } from 'lucide-react';

export const FriendsList = () => {
  const friends = [
    { name: 'ByteNinja', status: 'online', activity: 'In Battle' },
    { name: 'AlgoHero', status: 'online', activity: 'Available' },
    { name: 'CodeWizard', status: 'offline', activity: 'Last seen 2h ago' },
    { name: 'DevMaster', status: 'online', activity: 'In Queue' },
    { name: 'ScriptLord', status: 'offline', activity: 'Last seen 1d ago' },
  ];

  return (
    <div className="fc-bg-card fc-border border fc-shadow rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 fc-text" />
          <h2 className="text-lg font-bold fc-text">Friends</h2>
        </div>
        <span className="text-xs fc-text opacity-60">
          {friends.filter(f => f.status === 'online').length} online
        </span>
      </div>
      
      <div className="space-y-3">
        {friends.map((friend, index) => (
          <div key={index} className="flex items-center justify-between p-3 fc-bg-deep rounded-lg hover:fc-glow transition-all duration-200">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 fc-bg-outline rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold fc-text">
                    {friend.name.charAt(0)}
                  </span>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full fc-border border-2 ${
                  friend.status === 'online' ? 'fc-bg-outline fc-pulse' : 'fc-bg-card'
                }`}></div>
              </div>
              <div>
                <div className="fc-text text-sm font-semibold">{friend.name}</div>
                <div className="fc-text opacity-60 text-xs">{friend.activity}</div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-1 hover:fc-glow rounded transition-all duration-200">
                <MessageCircle className="w-4 h-4 fc-text opacity-70 hover:opacity-100" />
              </button>
              {friend.status === 'online' && friend.activity === 'Available' && (
                <button className="p-1 hover:fc-glow rounded transition-all duration-200">
                  <Sword className="w-4 h-4 fc-text opacity-70 hover:opacity-100" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
