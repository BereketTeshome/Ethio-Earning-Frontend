"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class">
        <Provider store={store}>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </Provider>
      </ThemeProvider>
    </div>
  );
}
