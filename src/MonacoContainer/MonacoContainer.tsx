import React, { memo } from 'react';

import styles from './styles';
import Loading from '../Loading';
import { type ContainerProps } from './types';

// ** forwardref render functions do not support proptypes or defaultprops **
// one of the reasons why we use a separate prop for passing ref instead of using forwardref

const MemoLoading = memo(Loading);

function MonacoContainer({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps,
}: ContainerProps) {
  return (
    <section style={{ ...styles.wrapper, width, height }} {...(wrapperProps ? wrapperProps : {})}>
      {!isEditorReady && <MemoLoading>{loading}</MemoLoading>}
      <div
        ref={_ref}
        style={{ ...styles.fullWidth, ...(!isEditorReady && styles.hide) }}
        className={className}
      />
    </section>
  );
}

export default MonacoContainer;
