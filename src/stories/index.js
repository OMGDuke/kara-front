import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../common/buttons/Button/Button.js';

storiesOf('Button', module)
  .add('with text', () => <Button action={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button action={action('💯')}>😀 😎 👍 💯</Button>);