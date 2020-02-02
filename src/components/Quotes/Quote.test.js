import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Quote text="My quote" name="my image" img="/path/to/img" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('matches a snapshot when name isn\'t provided', () => {
    const wrapper = shallow(<Quote text="my quote" img="/path/to/image" />);
    expect(wrapper).toMatchSnapshot();
  });
});

