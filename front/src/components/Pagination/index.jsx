// Pagination.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';  // 이 부분 수정

const Pagination = ({ totalPage, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div className={styles.pagination}> 
      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? styles.active : ''}  // 이 부분 수정
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
