import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Test } from '../Test'

test('render test', () => {
  render(<Test />)
})
