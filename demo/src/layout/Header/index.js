import React from 'react';

import HeaderLoader from 'sections/Header';
import { asyncComponentLoader } from 'utils';

import useStyles from './useStyles';

const HeaderSection = asyncComponentLoader(HeaderLoader);

const Header = _ => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderSection />
    </div>
  );
};

export default Header;
