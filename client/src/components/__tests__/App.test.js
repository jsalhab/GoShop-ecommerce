import React from 'react';
import App from '../../App';
import { shallow } from "enzyme"
import Header from '../header/Header';

it('shows Header', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Header).length).toEqual(1);
});
