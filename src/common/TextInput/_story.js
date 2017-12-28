import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from './TextInput.js';

storiesOf('TextInput', module)
  .add('default', () => <TextInput validation={'hello'}></TextInput>);