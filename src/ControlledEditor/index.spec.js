import React from 'react';
import ControlledEditor from '.';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<ControlledEditor />', () => {
  it('should check render with snapshot', () => {
    const component = render(
      <ControlledEditor />,
    );

    expect(component).toMatchSnapshot();
  });
});
