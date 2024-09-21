import EarnerDashboard from "@/components/EarnerDashboard";
import Earnings from "@/components/Earnings";
import Settings from "@/components/Settings";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  component: <EarnerDashboard />,
  location: "Dashboard",
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    changeComponent: (state, action) => {
      switch (action.payload) {
        case "dashboard":
          state.component = <EarnerDashboard />;
          state.location = "Dashboard";
          break;
        case "earnings":
          state.component = <Earnings />;
          state.location = "Earnings";
          break;
        case "settings":
          state.component = <Settings />;
          state.location = "Settings";
          break;
        default:
          state.component = <EarnerDashboard />;
          state.location = "Dashboard";
      }
    },
  },
});

export const { changeComponent } = componentSlice.actions;

export default componentSlice.reducer;
