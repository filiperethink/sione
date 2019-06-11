
import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<Form {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
