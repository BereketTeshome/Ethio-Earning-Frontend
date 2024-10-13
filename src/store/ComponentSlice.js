import AdminDashboard from "@/components/AdminComponents/AdminDashboard";
import Packages from "@/components/AdminComponents/Packages";
import { createSlice } from "@reduxjs/toolkit";
import EarnerDashboard from "@/components/EarnerComponents/EarnerDashboard";
import EarnerTasksPage from "@/components/EarnerComponents/EarnerTasksPage";
import Earnings from "@/components/EarnerComponents/Earnings";
import HelpPage from "@/components/EarnerComponents/HelpPage";

const role = "earner"; // Placeholder for user role, replace with actual role logic

// Set the initial component based on the role
const initialState = {
  component: role === "earner" ? <EarnerDashboard /> : <AdminDashboard />, // Dynamic component based on role
  location: "Dashboard",
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setInitialComponent: (state) => {
      if (role === "earner") {
        state.component = <EarnerDashboard />; // Set to EarnerDashboard for earners
      } else {
        state.component = <AdminDashboard />; // Default to AdminDashboard for others
      }
    },
    changeComponent: (state, action) => {
      switch (action.payload) {
        case "dashboard":
          state.component =
            role === "earner" ? <EarnerDashboard /> : <AdminDashboard />; // Dynamic dashboard based on role
          state.location = "Dashboard";
          break;
        case "packages":
          state.component = <Packages />;
          state.location = "Packages";
          break;
        case "tasks":
          state.component = <EarnerTasksPage />;
          state.location = "Tasks";
          break;
        case "earnings":
          state.component = <Earnings />;
          state.location = "Earnings";
          break;
        case "help":
          state.component = <HelpPage />;
          state.location = "Help";
          break;
        default:
          state.component =
            role === "earner" ? <EarnerDashboard /> : <AdminDashboard />; // Fallback to dynamic dashboard
          state.location = "Dashboard";
      }
    },
  },
});

export const { changeComponent } = componentSlice.actions;

export default componentSlice.reducer;
