import AdminDashboard from "@/components/AdminComponents/AdminDashboard";
import Earnings from "@/components/Earnings";
import Packages from "@/components/Packages";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  component: <AdminDashboard />,
  location: "Dashboard",
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    changeComponent: (state, action) => {
      switch (action.payload) {
        case "dashboard":
          state.component = <AdminDashboard />;
          state.location = "Dashboard";
          break;
        case "earnings":
          state.component = <Earnings />;
          state.location = "Earnings";
          break;
        case "packages":
          state.component = <Packages />;
          state.location = "Packages";
          break;
        default:
          state.component = <AdminDashboard />;
          state.location = "Dashboard";
      }
    },
  },
});

export const { changeComponent } = componentSlice.actions;

export default componentSlice.reducer;
