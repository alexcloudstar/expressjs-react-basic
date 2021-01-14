import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div``;

const Pagination = ({ currentPage, totalItems }: any) => {
  return (
    <PaginationWrapper>
      <p>{currentPage}</p>
      <p>{totalItems}</p>
    </PaginationWrapper>
  );
};

export default Pagination;
