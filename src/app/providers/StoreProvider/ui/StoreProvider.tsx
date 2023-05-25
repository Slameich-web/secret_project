import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';
import { useNavigate } from 'react-router-dom';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const navigate = useNavigate();
  const store = createReduxStore(initialState as StateSchema, navigate);

  return <Provider store={store}>{children}</Provider>;
};
