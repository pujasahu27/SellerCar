import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            {Array.from({ length: totalPages }).map((_, index) => (
                <button key={index} onClick={() => onPageChange(index + 1)}>{index + 1}</button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default Pagination;
