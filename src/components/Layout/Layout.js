import React from 'react';

import Frag from '../../hoc/Frag';

const layout = ( props ) => (
  <Frag>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Frag>
);

export default layout;