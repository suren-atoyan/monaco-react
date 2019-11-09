import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import styles from './styles';

const MonacoContainer = React.forwardRef(({ width, height, isEditorReady, loading }, ref) => (
  <section style={{ ...styles.wrapper, width, height }}>
    {!isEditorReady && <Loading content={loading} />}
    <div
      ref={ref}
      style={{ ...styles.fullWidth, ...(!isEditorReady && styles.hide) }}
    />
  </section>
));

MonacoContainer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  isEditorReady: PropTypes.bool.isRequired,
};

export default MonacoContainer;
