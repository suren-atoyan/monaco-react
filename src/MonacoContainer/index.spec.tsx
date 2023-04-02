import React, { createRef } from 'react';
import MonacoContainer from '.';
import { render } from '@testing-library/react';

describe('<MonacoContainer />', () => {
  it('should check render with snapshot', () => {
    const component = render(
      <MonacoContainer
        width="100%"
        height="100vh"
        _ref={createRef()}
        loading="loading..."
        isEditorReady={false}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
