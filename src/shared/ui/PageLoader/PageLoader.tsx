import React from 'react';
import styles from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={styles.pageLoader}>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
