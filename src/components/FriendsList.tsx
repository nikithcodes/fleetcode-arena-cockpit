
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
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-cyan-400" />
          <h2 className="text-lg font-bold text-white">Friends</h2>
        </div>
        <span className="text-xs text-gray-400">
          {friends.filter(f => f.status === 'online').length} online
        </span>
      </div>
      
      <div className="space-y-3">
        {friends.map((friend, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {friend.name.charAt(0)}
                  </span>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                  friend.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                }`}></div>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">{friend.name}</div>
                <div className="text-gray-400 text-xs">{friend.activity}</div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                <MessageCircle className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
              </button>
              {friend.status === 'online' && friend.activity === 'Available' && (
                <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                  <Sword className="w-4 h-4 text-gray-400 hover:text-red-400" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
