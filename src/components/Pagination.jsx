import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page - 1)}
          disabled={currentPage === page - 1}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
