import { Action } from '@reduxjs/toolkit';
import { PublicLayoutProviderInterface } from './context';
import { Dispatch } from 'react';

export const initialState: PublicLayoutProviderInterface = {
  slideOpened: false,
  dispatch: () => {},
};

export interface PublicLayoutActionInterface {
  type: 'toggleMenu';
  value: Partial<PublicLayoutProviderInterface>;
}

export function reducer(
  state: PublicLayoutProviderInterface,
  action: PublicLayoutActionInterface
) {
  const { type, value } = action;

  switch (type) {
    case 'toggleMenu':
      return { ...state, ...value };
    default:
      throw new Error();
  }
}
