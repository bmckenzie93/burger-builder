import React from 'react';

import styles from './BuildCtrl.module.css';

const buildCtrl = props => (
  <div className={styles.BuildCtrl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More} onClick={props.addHandler}>More</button>
  </div>
);

export default buildCtrl;