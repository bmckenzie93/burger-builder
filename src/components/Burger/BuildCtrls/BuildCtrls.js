import React from 'react';

import styles from './BuildCtrls.module.css';
import BuildCtrl from './BuildCtrl/BuildCtrl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildCtrls = props => (
  <div className={styles.BuildCtrls}>
    {controls.map(ctrl => (
      <BuildCtrl 
        key={ctrl.label} 
        label={ctrl.label}
        addHandler={()=>props.addHandler(ctrl.type)}
        subtractHandler ={()=>props.subtractHandler(ctrl.type)}
        disabled ={props.disabled[ctrl.type]} />
    ))}
  </div>
);
export default buildCtrls;