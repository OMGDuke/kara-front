import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import { shallow, mount, render } from 'enzyme';

const prevent = {
  preventDefault: () => {}
}

describe('TextInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextInput></TextInput>, div);
  });

  describe('types', () => {
    fit('should change to success if validation is met', () => {
      const wrapper = shallow(<TextInput validation={'Hello'}></TextInput>);
      wrapper.find('input').simulate('change', {target: {value: 'Hello'}});
      wrapper.instance().forceUpdate();
      const success = wrapper.find('.TextInput').hasClass('text-input--success');
      console.log(wrapper.debug());
      expect(success).toEqual(true);
    });
  });
});