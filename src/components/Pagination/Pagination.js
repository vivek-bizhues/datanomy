import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { GrPrevious as PreviousIcon, GrNext as NextIcon } from 'react-icons/gr';
import { HiOutlineDotsHorizontal as Dots } from 'react-icons/hi';
import styles from './Pagination.module.css';

const MAX_NUM_PAGES = 9;

const Pagination = ({ pagesCount, currentPage, basePath, addCanonical = true }) => {
  const path = `${basePath}/page/`;

  const hasPreviousPage = pagesCount > 1 && currentPage > 1;
  const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

  let hasPrevDots = false;
  let hasNextDots = false;

  function getPages() {
    let pages = pagesCount;
    let start = 0;
    // If the number of pages exceeds the max
    if (pagesCount > MAX_NUM_PAGES) {
      // Set the number of pages to the max
      pages = MAX_NUM_PAGES;
      const half = Math.ceil(MAX_NUM_PAGES / 2);
      const isHead = currentPage <= half;
      const isTail = currentPage > pagesCount - half;
      hasNextDots = !isTail;
      // If the current page is at the head, the start variable remains 0
      if (!isHead) {
        hasPrevDots = true;
        // If the current page is at the tail, the start variable is set to
        // the last chunk. Otherwise, the start variable will place the current
        // page in the middle
        start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
      }
    }
    return [...new Array(pages)].map((_, i) => i + 1 + start);
  }

  const pages = getPages();

  return (
    <>
      <Helmet>
        {addCanonical && !hasPreviousPage && <link rel="canonical" href={`${basePath}`} />}
        {hasPreviousPage && <link rel="prev" href={`${path}${currentPage - 1}`} />}
        {hasNextPage && <link rel="next" href={`${path}${currentPage + 1}`} />}
      </Helmet>

      <nav className={styles.pagination} role="navigation" aria-label="Pagination Navigation">
        {hasPreviousPage && (
          <Link href={`${path}${currentPage - 1}`} aria-label="Go to Previous Page"  className={styles.paginationLink}>
              <PreviousIcon /> Previous
          </Link>
        )}

        <ul className={styles.pageList}>
          {hasPrevDots && (
            <li>
              <Dots aria-label={`Navigation to pages 1-${pages[0] - 1} hidden`} className={styles.dots} />
            </li>
          )}
          {pages.map((page) => {
            const active = page === currentPage;
            return active ? (
              <li key={page}>
                <span className={styles.currentPage} aria-label={`Current Page, Page ${page}`} aria-current="true">
                  {page}
                </span>
              </li>
            ) : (
              <li key={page}>
                <Link href={`${path}${page}`} aria-label={`Go to Page ${page}`} className={styles.paginationLink}>
                  {page}
                </Link>
              </li>
            );
          })}
          {hasNextDots && (
            <li>
              <Dots
                aria-label={`Navigation to pages ${pages[pages.length - 1] + 1}-${pagesCount} hidden`}
                className={styles.dots}
              />
            </li>
          )}
        </ul>

        {hasNextPage && (
          <Link href={`${path}${currentPage + 1}`} aria-label="Go to Next Page" className={styles.paginationLink}>
              Next <NextIcon />
          </Link>
        )}
      </nav>
    </>
  );
};

export default Pagination;
