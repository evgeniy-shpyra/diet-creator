import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  headerHeight: number
}

const initialState: AppState = {
  headerHeight: 60,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   
  },
})


// export const {  } = appSlice.actions

export default appSlice.reducer