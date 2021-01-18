/* A flexbox container */

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

import useFlexStyles from './styles';

const Fb = forwardRef(function Fb(props, ref) {
  const flexClasses = useFlexStyles();
  const {
    row,
    wrap,
    grow,
    column,
    noGrow,
    shrink,
    noWrap,
    inline,
    children,
    alignEnd,
    noShrink,
    className,
    rowReverse,
    alignStart,
    justifyEnd,
    alignCenter,
    justifyStart,
    justifyCenter,
    justifyAround,
    justifyEvenly,
    justifyBetween,
    ...otherProps
  } = props;

  const combinedClassNames = clsx(className, {
    [flexClasses.main]: !inline,
    [flexClasses.inline]: inline,
    [flexClasses.row]: row,
    [flexClasses.wrap]: wrap,
    [flexClasses.grow]: grow,
    [flexClasses.column]: column,
    [flexClasses.noGrow]: noGrow,
    [flexClasses.shrink]: shrink,
    [flexClasses.noWrap]: noWrap,
    [flexClasses.alignEnd]: alignEnd,
    [flexClasses.noShrink]: noShrink,
    [flexClasses.rowReverse]: rowReverse,
    [flexClasses.alignStart]: alignStart,
    [flexClasses.justifyEnd]: justifyEnd,
    [flexClasses.alignCenter]: alignCenter,
    [flexClasses.justifyStart]: justifyStart,
    [flexClasses.justifyCenter]: justifyCenter,
    [flexClasses.justifyAround]: justifyAround,
    [flexClasses.justifyEvenly]: justifyEvenly,
    [flexClasses.justifyBetween]: justifyBetween,
  });

  return (
    <Box
      ref={ref}
      {...otherProps}
      className={combinedClassNames}
    >
      {children}
    </Box>
  );
});

Fb.defaultProps = {
  className: '',

  row: false,
  wrap: false,
  grow: false,
  inline: false,
  column: false,
  noGrow: false,
  shrink: false,
  noWrap: false,
  noShrink: true,
  alignEnd: false,
  rowReverse: false,
  justifyEnd: false,
  alignStart: false,
  alignCenter: false,
  justifyStart: false,
  justifyCenter: false,
  justifyAround: false,
  justifyEvenly: false,
  justifyBetween: false,
};

Fb.propTypes = {
  className: PropTypes.string,

  row: PropTypes.bool,
  grow: PropTypes.bool,
  wrap: PropTypes.bool,
  inline: PropTypes.bool,
  noWrap: PropTypes.bool,
  column: PropTypes.bool,
  noGrow: PropTypes.bool,
  shrink: PropTypes.bool,
  alignEnd: PropTypes.bool,
  noShrink: PropTypes.bool,
  rowReverse: PropTypes.bool,
  alignStart: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  justifyStart: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  justifyAround: PropTypes.bool,
  justifyEvenly: PropTypes.bool,
  justifyBetween: PropTypes.bool,
};

export default Fb;
