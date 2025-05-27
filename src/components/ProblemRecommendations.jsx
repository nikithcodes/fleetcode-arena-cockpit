
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
      description: 'Master advanced binary search patterns and edge cases'
    },
    {
      title: 'Dynamic Programming Patterns', 
      difficulty: 'Hard',
      tags: ['DP', 'Optimization'],
      rating: 1900,
      solved: 856,
      description: 'Complex DP state transitions and optimization techniques'
    },
    {
      title: 'Graph Theory Fundamentals',
      difficulty: 'Medium',
      tags: ['Graphs', 'DFS', 'BFS'],
      rating: 1650,
      solved: 2100,
      description: 'Essential graph algorithms and traversal methods'
    },
    {
      title: 'Tree Traversal Mastery',
      difficulty: 'Easy',
      tags: ['Trees', 'Recursion'],
      rating: 1400,
      solved: 3200,
      description: 'Practice tree traversal techniques and patterns'
    },
    {
      title: 'Sliding Window Patterns',
      difficulty: 'Medium',
      tags: ['Two Pointers', 'Arrays'],
      rating: 1600,
      solved: 1800,
      description: 'Master sliding window approach for array problems'
    }
  ];

  const getDifficultyStyle = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30';
      case 'Medium':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/30';
      case 'Hard':
        return 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30';
      default:
        return 'fc-text fc-bg-outline';
    }
  };

  return (
    <div className="fc-bg-card fc-border border fc-shadow rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 fc-bg-outline rounded-lg">
            <Target className="w-6 h-6 fc-text animate-pulse" />
          </div>
          <h2 className="text-xl font-bold fc-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Recommended Problems
          </h2>
          <span className="text-xs fc-text opacity-60 fc-bg-deep px-3 py-1 rounded-full border border-blue-500/30 animate-pulse">
            AI Curated
          </span>
        </div>
        
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="fc-bg-deep rounded-xl p-4 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative overflow-hidden border border-gray-700/50 hover:border-blue-500/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="fc-text font-bold mb-2 group-hover:text-blue-400 transition-colors duration-200 text-lg">
                      {problem.title}
                    </h3>
                    <p className="fc-text opacity-70 text-sm mb-3 leading-relaxed">{problem.description}</p>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyStyle(problem.difficulty)} transform group-hover:scale-105 transition-transform duration-200`}>
                        {problem.difficulty}
                      </span>
                      <div className="flex items-center space-x-1 text-sm fc-text opacity-70">
                        <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                        <span className="font-semibold">{problem.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {problem.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="fc-bg-outline fc-text px-2 py-1 rounded-lg text-xs border border-blue-500/30 hover:border-blue-500/60 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-xs fc-text opacity-60">
                      {problem.solved.toLocaleString()} developers solved this
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 fc-text px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform group-hover:translate-y-[-2px]">
                  <Code className="w-4 h-4" />
                  <span>Start Solving</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
