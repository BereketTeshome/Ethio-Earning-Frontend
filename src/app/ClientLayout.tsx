"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import languageReducer from "../store/LanguageSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

const inter = Inter({ subsets: ["latin"] });

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get current path

  // Check if the route is 'SignUp' or 'SignIn'
  const hideNavbarFooter =
    pathname === "/SignUp" ||
    pathname === "/SignIn" ||
    pathname === "/Verify" ||
    pathname === "/ForgotPassword" ||
    pathname === "/EarnerDashboard" ||
    pathname === "/DashboardTest" ||
    pathname === "/ResetPassword";

  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class">
        <Provider store={store}>
          {!hideNavbarFooter && <Navbar />}

          <div>{children}</div>

          {!hideNavbarFooter && <Footer />}

          <PopupWidget />
        </Provider>
      </ThemeProvider>
    </div>
  );
}
