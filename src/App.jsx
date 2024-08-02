import React from "react";
import { ThemeProvider } from "./components/core/theme-provider/theme-provider";
import { AppRouter } from "./router";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
