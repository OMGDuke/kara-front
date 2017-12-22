import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../common/buttons/Button/Button.js';

storiesOf('Button', module)
  .add('with text', () => <Button action={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button action={action('💯')}>😀 😎 👍 💯</Button>)
  .add('as a success', () => <Button type={'success'} action={action('clicked')}>Success Button</Button>)
  .add('as a warning', () => <Button type={'warning'} action={action('clicked')}>Warning Button</Button>)
  .add('as an error', () => <Button type={'error'} action={action('clicked')}>Error Button</Button>)
  .add('as a small button', () => <Button size={'small'} action={action('clicked')}>Small Button</Button>)
  .add('as a large button', () => <Button size={'large'} action={action('clicked')}>Large Button</Button>)
  .add('as a large success button', () => <Button type={'success'} size={'large'} action={action('clicked')}>Success Button</Button>);