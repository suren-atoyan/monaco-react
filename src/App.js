import React from 'react';

import ErrorBoundary from 'react-error-boundary';
import ErrorBoundaryFallback from 'components/ErrorBoundaryFallback';

import Layout from 'layout';

const App = _ => (
  <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
    <Layout />
  </ErrorBoundary>
);

export default App;
