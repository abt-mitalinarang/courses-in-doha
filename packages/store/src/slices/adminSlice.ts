import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit"
import { api, API_ENDPOINTS } from "@repo/api"
import { IAdminDetails } from "@repo/core/interface/admin.interface"

export interface IUserState {
  adminDetails: IAdminDetails | null
}

const initialState: IUserState = {
  adminDetails: null,
}

export const fetchAdminDetails = createAsyncThunk(
  "users/fetchByIdStatus",
  async (thunkAPI) => {
    const response = await api.get(API_ENDPOINTS.admin.adminDetails)
    console.log(response)
    return response.admin_profile
  }
)

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<string[], "quantity">>) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdminDetails.fulfilled, (state, action) => {
      console.log(action.payload)
      state.adminDetails = action.payload
    })
  },
})

export const { addItem } = adminSlice.actions

export default adminSlice.reducer
