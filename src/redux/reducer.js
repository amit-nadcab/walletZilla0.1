import { createSlice } from "@reduxjs/toolkit";


const initialValue = {
    userAddress: ""
}
export const dataSlice = createSlice({
    name: "walletZilla",
    initialState: {
        value: initialValue,
      },
      reducers: {
        setUserAddress: (state, action)=>{
            state.value.userAddress  = action.payload.userAddress
        }
      }
})
export const {
    setUserAddress
} = dataSlice.actions;

export default dataSlice.reducer;
