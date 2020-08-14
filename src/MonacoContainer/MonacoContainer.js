import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import styles from './styles';

// ** forwardref render functions do not support proptypes or defaultprops **
// one of the reasons why we use a separate prop for passing ref instead of using forwardref

const MonacoContainer = ({
  containerId,
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperClassName,
}) => (
  <section id={containerId} style={{ ...styles.wrapper, width, height }} className={wrapperClassName}>
    {!isEditorReady && <Loading content={loading} />}
    <div
      ref={_ref}
      style={{ ...styles.fullWidth, ...(!isEditorReady && styles.hide) }}
      className={className}
    />
  </section>
);

MonacoContainer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  isEditorReady: PropTypes.bool.isRequired,
  className: PropTypes.string,
  containerId: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default MonacoContainer;
