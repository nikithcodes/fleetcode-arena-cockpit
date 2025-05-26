
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

  const getDifficultyStyle = (difficulty) => {
    return 'fc-text fc-bg-outline';
  };

  return (
    <div className="fc-bg-card fc-border border fc-shadow rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Target className="w-5 h-5 fc-text" />
        <h2 className="text-lg font-bold fc-text">Recommended Problems</h2>
        <span className="text-xs fc-text opacity-60 fc-bg-deep px-2 py-1 rounded-full">
          Personalized for you
        </span>
      </div>
      
      <div className="space-y-4">
        {problems.map((problem, index) => (
          <div key={index} className="fc-bg-deep rounded-lg p-4 hover:fc-glow transition-all duration-200 hover:scale-[1.02] cursor-pointer group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="fc-text font-semibold mb-1 group-hover:opacity-80 transition-all duration-200">
                  {problem.title}
                </h3>
                <p className="fc-text opacity-60 text-sm mb-2">{problem.description}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyStyle(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                  <div className="flex items-center space-x-1 text-xs fc-text opacity-60">
                    <Star className="w-3 h-3" />
                    <span>{problem.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {problem.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="fc-bg-outline fc-text px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="fc-bg-outline hover:fc-glow fc-text px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 flex items-center space-x-2 fc-shadow">
                <Code className="w-4 h-4" />
                <span>Solve</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs fc-text opacity-60">
              {problem.solved.toLocaleString()} developers solved this
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
