import { Home, Projects, Experience } from "@/screens";
import { SplashScreen, Header } from "@/components";
import ThemeProvider from "@/contexts/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <SplashScreen>
        <Header />
        <Home />
        <Projects />
        <Experience />
      </SplashScreen>
    </ThemeProvider>
  );
}

export default App;
