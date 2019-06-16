import React from 'react';

const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

function Loading({ content }) {
  return <div style={loadingStyles}>{content}</div>;
}

export default Loading;
