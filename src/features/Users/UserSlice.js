import { createSlice } from "reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setData: (state, action) => {
      // Assuming action.payload is the data you want to set
      state.users = action.payload;
    },
    fetchData: async (state) => {
      try {
        const response = await fetch("http://localhost:3001/api/users");
        const usersData = await response.json();

        state.dispatch(UserSlice.actions.setData(usersData));
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});

export const { setData, fetchData } = UserSlice.actions;

export default UserSlice.reducer;
