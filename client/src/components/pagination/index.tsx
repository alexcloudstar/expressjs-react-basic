import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div``;

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`page-item ${
            currentPage === number ? 'active' : undefined
          }`}
          onClick={() => paginate(number)}
        >
          <span className='page-link'>{number}</span>
        </button>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
