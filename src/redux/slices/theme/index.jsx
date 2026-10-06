import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = localStorage.getItem("darkMode");

  // Use user's saved preference if available
  if (savedTheme !== null) {
    return savedTheme === "true";
  }

  // Otherwise use system/browser preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const initialState = {
  value: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: "darkTheme",
  initialState,

  reducers: {
    changeThemeMode: (state) => {
      state.value = !state.value;
      localStorage.setItem("darkMode", state.value);
    },

    setDarkMode: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("darkMode", action.payload);
    },

    toggleDarkMode: (state) => {
      state.value = !state.value;
      localStorage.setItem("darkMode", state.value);
    },
  },
});

export const {
  changeThemeMode,
  setDarkMode,
  toggleDarkMode,
} = themeSlice.actions;

export default themeSlice.reducer;