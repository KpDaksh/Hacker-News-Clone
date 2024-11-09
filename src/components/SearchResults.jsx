import React from 'react';

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results found.</p>;
  }

  return (
    <ul className="results-list">
      {results.map((item) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title} by {item.author}
          </a>
          <p>{item.points} points | {item.num_comments} comments</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
