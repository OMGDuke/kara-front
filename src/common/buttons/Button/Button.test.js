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

  describe('types', () => {
    it('should render a warning', () => {
      const wrapper = shallow(<Button type={'warning'}>Best button eu</Button>);
      const warningClass = wrapper.find('.Button').hasClass('button--warning');
      expect(warningClass).toEqual(true);
    });
    it('should render a error', () => {
      const wrapper = shallow(<Button type={'error'}>Best button eu</Button>);
      const errorClass = wrapper.find('.Button').hasClass('button--error');
      expect(errorClass).toEqual(true);
    });
    it('should render a success', () => {
      const wrapper = shallow(<Button type={'success'}>Best button eu</Button>);
      const successClass = wrapper.find('.Button').hasClass('button--success');
      expect(successClass).toEqual(true);
    });
  });
});