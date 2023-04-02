import React, { type PropsWithChildren } from 'react';

import styles from './styles';

function Loading({ children }: PropsWithChildren) {
  return <div style={styles.container}>{children}</div>;
}

export default Loading;
