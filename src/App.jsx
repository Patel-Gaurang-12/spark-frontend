import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { RouterComponent } from "./components/router/RouterComponent";

function App() {

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <RouterComponent />
    </CssVarsProvider>
  )
}

export default App;
