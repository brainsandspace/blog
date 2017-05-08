import React from 'react';
import { shallow } from 'enzyme';

import Post from '../index';

describe('<Post />', () => {
  it('should have a child with the className post', () => {
    const renderedComponent = shallow(<Post />);
    expect(renderedComponent.contains(<div className="post" />)).toEqual(true);
  });
});
