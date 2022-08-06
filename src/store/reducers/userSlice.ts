import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../models/IUser';


interface UserState {
  users: IUser[],
  isLoding: boolean,
  error: string,
}

const initialState: UserState = {
  users: [],
  isLoding: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoding = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoding = false;
      state.users = action.payload;
      state.error = '';
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoding = false;
      state.error = action.payload;
    }
  }
})

export default userSlice.reducer;
