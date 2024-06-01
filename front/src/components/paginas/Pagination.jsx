import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    return (
      <div className="flex justify-center my-6">
        <button onClick={handlePrevious} disabled={currentPage === 1} className="px-3 py-1 bg-gray-200 rounded-l disabled:bg-gray-300">
          &laquo; Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} hover:bg-blue-400`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages} className="px-3 py-1 bg-gray-200 rounded-r disabled:bg-gray-300">
          Next &raquo;
        </button>
      </div>
    );
};
  
export default Pagination;