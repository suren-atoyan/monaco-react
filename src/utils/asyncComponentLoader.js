import React, { Suspense } from 'react';

import Loading from 'components/Loading';

const wrapperStyles = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  minHeight: 50,
  flexShrink: 0,
};

const WaitingCompLoader = _ => <div style={wrapperStyles}>
  <Loading isLoading/>
</div>;

const asyncComponentLoader = Component => props => <Suspense fallback={<WaitingCompLoader />}>
  <Component {...props} />
</Suspense>;

export default asyncComponentLoader;
