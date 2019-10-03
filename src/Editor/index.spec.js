import React from 'react';
import Editor from '.';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Editor />', () => {
  it('should check render with snapshot', () => {
    const component = render(
      <Editor />,
    );

    expect(component).toMatchSnapshot();
  });
});
