import React from 'react';
import MonacoContainer from '.';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<MonacoContainer />', () => {
  it('should check render with snapshot', () => {
    const component = render(
      <MonacoContainer />,
    );

    expect(component).toMatchSnapshot();
  });
});
