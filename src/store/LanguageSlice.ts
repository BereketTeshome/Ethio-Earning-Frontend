// LanguageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Language = "eng" | "amh";

interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: "eng",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
