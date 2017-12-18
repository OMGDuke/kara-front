import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../common/buttons/Button/Button.js';

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with a red background', () => <Button>EXIT</Button>)
  .add('with some emoji', () => <Button>😀 😎 👍 💯</Button>);