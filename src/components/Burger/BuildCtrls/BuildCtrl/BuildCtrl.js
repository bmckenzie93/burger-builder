import React from 'react';

import styles from './BuildCtrl.module.css';

const buildCtrl = props => (
  <div className={styles.BuildCtrl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less} onClick={props.subtractHandler} disabled={props.disabled}>Less</button>
    <button className={styles.More} onClick={props.addHandler}>More</button>
  </div>
);

export default buildCtrl;