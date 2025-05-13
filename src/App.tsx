import { Home, Projects} from "@/screens";
import { SplashScreen } from "@/components";
import ThemeProvider from "./contexts/ThemeContext";
function App() {
  return (
    <ThemeProvider>
        <SplashScreen>
          <Home />
          <Projects />
        </SplashScreen>
     </ThemeProvider>
  );
}

export default App;
