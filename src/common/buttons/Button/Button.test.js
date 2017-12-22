import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { shallow, mount, render } from 'enzyme';

const prevent = {
  preventDefault: () => {}
}

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Hello World</Button>, div);
  });

  it('should render the text that is placed within it', () => {
    const wrapper = shallow(<Button>Best button eu</Button>);
    const text = wrapper.find('a').text();
    expect(text).toEqual('Best button eu');
  })

  it('should call whatever function you pass in as an action when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button action={onClick}>Hello World</Button>);
    wrapper.find('a').simulate('click', prevent);
    expect(onClick).toBeCalled();
  });
});