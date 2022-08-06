import { IUser } from './../../models/IUser';
import { userSlice } from './userSlice';
import { AppDispatch } from './../store';
import axios from 'axios';

const { usersFetching, usersFetchingSuccess, usersFetchingError } = userSlice.actions;

export const fetchUsers = () => (dispatch: AppDispatch) => {
  dispatch(usersFetching())
  axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    .then(res => dispatch(usersFetchingSuccess(res.data)))
    .catch(err => dispatch(usersFetchingError(err.message)))
}