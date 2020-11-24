import React from 'react';

import Frag from '../../hoc/Frag';
import styles from './Layout.module.css';

const layout = ( props ) => (
  <Frag>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.content}>
      {props.children}
    </main>
  </Frag>
);

export default layout;