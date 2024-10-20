import AdminDashboard from "@/components/AdminComponents/AdminDashboard";
import Packages from "@/components/AdminComponents/Packages";
import { createSlice } from "@reduxjs/toolkit";
import EarnerDashboard from "@/components/EarnerComponents/EarnerDashboard";
import EarnerTasksPage from "@/components/EarnerComponents/EarnerTasksPage";
import Earnings from "@/components/EarnerComponents/Earnings";
import HelpPage from "@/components/EarnerComponents/HelpPage";

// Import Investor components
import InvestorDashboard from "@/components/InvestorComponents/InvestorDashboard";
import InvestorHelpPage from "@/components/InvestorComponents/InvestorHelpPage";
import PackageSelectionPage from "@/components/InvestorComponents/PackageSelectionPage";
import PaymentBillingPage from "@/components/InvestorComponents/PaymentBillingPage";
import CampaignManagementPage from "@/components/InvestorComponents/CampaignManagementPage";
import InvestorSettings from "@/components/InvestorComponents/InvestorSettings";
import EarnerSettings from "@/components/EarnerComponents/EarnerSettings";
import AdminSettingsPage from "@/components/AdminComponents/AdminSettingsPage";
import BlogPostPage from "@/components/AdminComponents/BlogPostPage";

const role = "admin"; // Placeholder for user role, replace with actual role logic

// Set the initial component based on the role
const initialState = {
  component:
    role === "earner" ? (
      <EarnerDashboard />
    ) : role === "investor" ? (
      <InvestorDashboard />
    ) : (
      <AdminDashboard />
    ), // Dynamic component based on role
  location: "Dashboard",
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setInitialComponent: (state) => {
      if (role === "earner") {
        state.component = <EarnerDashboard />; // Set to EarnerDashboard for earners
      } else if (role === "investor") {
        state.component = <InvestorDashboard />; // Set to InvestorDashboard for investors
      } else {
        state.component = <AdminDashboard />; // Default to AdminDashboard for others
      }
    },
    changeComponent: (state, action) => {
      switch (action.payload) {
        case "dashboard":
          state.component =
            role === "earner" ? (
              <EarnerDashboard />
            ) : role === "investor" ? (
              <InvestorDashboard />
            ) : (
              <AdminDashboard />
            ); // Dynamic dashboard based on role
          state.location = "Dashboard";
          break;
        // Admin-specific pages
        case "packages":
          state.component = <Packages />;
          state.location = "Packages";
          break;
        case "adminSettings":
          state.component = <AdminSettingsPage />;
          state.location = "Admin Settings";
          break;
        case "news":
          state.component = <BlogPostPage />;
          state.location = "Blog post";
          break;
        // Earner-specific pages
        case "tasks":
          state.component = <EarnerTasksPage />;
          state.location = "Tasks";
          break;
        case "earnings":
          state.component = <Earnings />;
          state.location = "Earnings";
          break;
        case "earnerSetting":
          state.component = <EarnerSettings />;
          state.location = "Earner Settings";
          break;
        case "help":
          state.component =
            role === "earner" ? <HelpPage /> : <InvestorHelpPage />; // Investor and Earner have separate Help pages
          state.location = "Help";
          break;
        // Investor-specific pages
        case "packageSelection":
          state.component = <PackageSelectionPage />;
          state.location = "Package Selection";
          break;
        case "investorSettings":
          state.component = <InvestorSettings />;
          state.location = "Investor Settings";
          break;
        case "paymentBilling":
          state.component = <PaymentBillingPage />;
          state.location = "Payment & Billing";
          break;
        case "campaignManagement":
          state.component = <CampaignManagementPage />;
          state.location = "Campaign Management";
          break;
        default:
          state.component =
            role === "earner" ? (
              <EarnerDashboard />
            ) : role === "investor" ? (
              <InvestorDashboard />
            ) : (
              <AdminDashboard />
            ); // Fallback to dynamic dashboard
          state.location = "Dashboard";
      }
    },
  },
});

export const { changeComponent } = componentSlice.actions;

export default componentSlice.reducer;
