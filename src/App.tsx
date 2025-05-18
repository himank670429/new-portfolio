import { Home, Projects } from "@/screens";
import { SplashScreen, Header } from "@/components";
import ThemeProvider from "./contexts/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <SplashScreen>
        <Header />
        <Home />
        <Projects />
      </SplashScreen>
    </ThemeProvider>
  );
}

export default App;
