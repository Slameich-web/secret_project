import axios from 'axios';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('getLoginState', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });
  test('should work with empty state', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '1' } }));
    const action = loginByUsername({ username: '123', password: '123' });
    const result = await action(dispatch, getState, undefined);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
  test('should work with empty state', async () => {
    const userValue = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByUsername({ username: '123', password: '123' });
    const result = await action(dispatch, getState, undefined);
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(3);

    expect(result.meta.requestStatus).toBe('fulfilled');
  });
  test('should work with empty state', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: '123', password: '123' });
    const result = await action(dispatch, getState, undefined);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
