import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastCustomProvider } from "./context/toastCustom";
import { Home } from "./pages/Home";
import { theme } from "./theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastCustomProvider>
        <Home />
      </ToastCustomProvider>
    </ThemeProvider>
  );
}
