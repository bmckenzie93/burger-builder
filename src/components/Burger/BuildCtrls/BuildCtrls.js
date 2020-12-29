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
    <p>Total price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildCtrl 
        key={ctrl.label} 
        label={ctrl.label}
        addHandler={()=>props.addHandler(ctrl.type)}
        subtractHandler ={()=>props.subtractHandler(ctrl.type)}
        disabled ={props.disabled[ctrl.type]} />
    ))}
    <button 
      className={styles.OrderButton}
      disabled={!props.canPurchase}
      onClick={props.orderNow}>
        ORDER NOW!
    </button>
  </div>
);
export default buildCtrls;