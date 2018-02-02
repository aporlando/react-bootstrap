import React from 'react';

import {storiesOf} from '@storybook/react'; // eslint-disable-line

import Alert from '../src/Alert';

storiesOf('Alert', module)
  .add('Styles ✔', () => (
    <div>
      <div>
        <Alert bsStyle="primary">This is a primary alert—check it out!</Alert>
        <Alert bsStyle="secondary">
          This is a secondary alert—check it out!
        </Alert>
        <Alert bsStyle="success">This is a success alert—check it out!</Alert>
        <Alert bsStyle="danger">This is a danger alert—check it out!</Alert>
        <Alert bsStyle="warning">This is a warning alert—check it out!</Alert>
        <Alert bsStyle="info">This is a info alert—check it out!</Alert>
        <Alert bsStyle="light">This is a light alert—check it out!</Alert>
        <Alert bsStyle="dark">This is a dark alert—check it out!</Alert>
      </div>
    </div>
  ))
  .add('with links ✔', () => (
    <div>
      <Alert bsStyle="primary">
        This is a primary alert with{' '}
        <a href="" className="alert-link">
          an example link
        </a>.
      </Alert>
      <Alert bsStyle="secondary">
        This is a secondary alert with{' '}
        <a href="" className="alert-link">
          an example link
        </a>.
      </Alert>
      <Alert bsStyle="success">
        This is a success alert with{' '}
        <a href="" className="alert-link">
          an example link
        </a>.
      </Alert>
      <Alert bsStyle="danger">
        This is a danger alert with{' '}
        <a href="" className="alert-link">
          an example link
        </a>.
      </Alert>
      <Alert bsStyle="warning">
        This is a warning alert with{' '}
        <a href="" className="alert-link">
          an example link
        </a>.
      </Alert>
      <Alert bsStyle="info">
        This is a info alert with{' '}
        <a href="" className="alert-link">
          an example link
        </a>.
      </Alert>
      <Alert bsStyle="light">
        This is a light alert with{' '}
        <a href="" className="alert-link">
          an example link
        </a>.
      </Alert>
      <Alert bsStyle="dark">
        This is a dark alert with{' '}
        <a href="" className="alert-link">
          an example link
        </a>.
      </Alert>
    </div>
  ))
  .add('onDismiss ✔', () => (
    <div>
      <Alert onDismiss={() => alert('Dismissed!')}>
        There is an onDismiss listener. This one causes a browser alert.
      </Alert>
    </div>
  ));
