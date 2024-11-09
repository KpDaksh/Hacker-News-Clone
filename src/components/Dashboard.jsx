import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResults, setQuery, setPage } from '../features/search/searchSlice';
import SearchResults from './SearchResults';
import Pagination from './Pagination';

function Dashboard() {
  const dispatch = useDispatch();
  const { query, results, page, totalPages, status } = useSelector((state) => state.search);

  useEffect(() => {
    if (query || query === '') {
      dispatch(fetchResults({ query, page }));
    }
  }, [query, page, dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setQuery(e.target.value));
    dispatch(setPage(0)); 
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {localStorage.getItem('username') || 'Guest'}</h1>

      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Hacker News"
          value={query}
          onChange={handleSearchChange}  
        />
      </div>

     
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load data. Please try again.</p>}

     
      <SearchResults results={results} />

     
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={(p) => dispatch(setPage(p))} />
    </div>
  );
}

export default Dashboard;
