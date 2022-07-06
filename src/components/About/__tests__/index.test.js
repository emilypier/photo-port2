import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from  '..';

afterEach(cleanup);

describe('About component', () => {
  // test 1. verify component is rendering
  it('renders', () => {
    render(<About/>);
  });
  // test 2. compare snapshots of the DOM
  it('matches snapshot DOM made structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
})

