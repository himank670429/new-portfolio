import { Home } from "@/screens";
import { SplashScreen, ScreenLayout } from "@/components";
import ThemeProvider from "./contexts/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <ScreenLayout>
        <SplashScreen>
          <Home />
        </SplashScreen>
      </ScreenLayout>
     </ThemeProvider>
  );
}

export default App;
