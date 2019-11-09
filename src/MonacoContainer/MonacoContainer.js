import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import styles from './styles';

// ** forwardref render functions do not support proptypes or defaultprops **
// one of the reasons why we use a separate prop for passing ref instead of using forwardref

const MonacoContainer = ({ width, height, isEditorReady, loading, _ref }) => (
  <section style={{ ...styles.wrapper, width, height }}>
    {!isEditorReady && <Loading content={loading} />}
    <div
      ref={_ref}
      style={{ ...styles.fullWidth, ...(!isEditorReady && styles.hide) }}
    />
  </section>
);

MonacoContainer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  isEditorReady: PropTypes.bool.isRequired,
};

export default MonacoContainer;
