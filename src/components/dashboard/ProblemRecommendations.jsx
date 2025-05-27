
import React from 'react';
import { Target, Star, Code, ArrowRight } from 'lucide-react';
import './ProblemRecommendations.css';

const ProblemRecommendations = () => {
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
    },
    {
      title: 'Tree Traversal Mastery',
      difficulty: 'Easy',
      tags: ['Trees', 'Recursion'],
      rating: 1400,
      solved: 3200,
      description: 'Practice tree traversal techniques'
    },
    {
      title: 'Sliding Window Patterns',
      difficulty: 'Medium',
      tags: ['Two Pointers', 'Arrays'],
      rating: 1600,
      solved: 1800,
      description: 'Master sliding window approach'
    }
  ];

  return (
    <div className="problems-card">
      <div className="problems-header">
        <Target className="target-icon" />
        <h2>Recommended Problems</h2>
        <span className="personalized-tag">Personalized for you</span>
      </div>
      
      <div className="problems-list">
        {problems.map((problem, index) => (
          <div key={index} className="problem-item">
            <div className="problem-info">
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
              <div className="problem-meta">
                <span className={`difficulty-badge ${problem.difficulty.toLowerCase()}`}>
                  {problem.difficulty}
                </span>
                <div className="problem-rating">
                  <Star className="star-icon" />
                  <span>{problem.rating}</span>
                </div>
              </div>
              <div className="problem-tags">
                {problem.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              <div className="problem-solved">
                {problem.solved.toLocaleString()} developers solved this
              </div>
            </div>
            <button className="solve-btn">
              <Code className="solve-icon" />
              <span>Solve</span>
              <ArrowRight className="arrow-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemRecommendations;
