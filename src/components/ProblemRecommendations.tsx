
import React from 'react';
import { Target, Star, Code, ArrowRight } from 'lucide-react';

export const ProblemRecommendations = () => {
  const problems = [
    {
      title: 'Advanced Binary Search',
      difficulty: 'Medium',
      tags: ['Binary Search', 'Arrays'],
      rating: 1750,
      solved: 1234,
      description: 'Master advanced binary search patterns'
    },
    {
      title: 'Dynamic Programming Patterns', 
      difficulty: 'Hard',
      tags: ['DP', 'Optimization'],
      rating: 1900,
      solved: 856,
      description: 'Complex DP state transitions'
    },
    {
      title: 'Graph Theory Fundamentals',
      difficulty: 'Medium',
      tags: ['Graphs', 'DFS', 'BFS'],
      rating: 1650,
      solved: 2100,
      description: 'Essential graph algorithms'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Target className="w-5 h-5 text-green-400" />
        <h2 className="text-lg font-bold text-white">Recommended Problems</h2>
        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
          Personalized for you
        </span>
      </div>
      
      <div className="space-y-4">
        {problems.map((problem, index) => (
          <div key={index} className="bg-gray-900/40 rounded-lg p-4 hover:bg-gray-900/60 transition-all duration-200 hover:scale-[1.02] cursor-pointer group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{problem.description}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <Star className="w-3 h-3" />
                    <span>{problem.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {problem.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Solve</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-gray-400">
              {problem.solved.toLocaleString()} developers solved this
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
