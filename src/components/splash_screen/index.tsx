import {AnimatedLoadingLogo} from "@/components";
import {useState, useEffect, PropsWithChildren} from "react";
import {splashScreenDuration} from "@/constants/defaultValues";

export function SplashScreen(props: Readonly<PropsWithChildren>): JSX.Element {
  const {children} = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true); // Start fade-out animation
    }, splashScreenDuration * 1000 - 500); // Fade-out starts slightly before hiding

    const hideTimer = setTimeout(() => {
      setIsLoading(false); // Hide the splash screen completely
    }, splashScreenDuration * 1000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className={`${styles.splashscreenContainer} ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <AnimatedLoadingLogo />
        </div>
      ) : (
        children
      )}
    </>
  );
}

const styles = {
  splashscreenContainer: "absolute inset-0 flex justify-center items-center bg-background transition-opacity duration-500"
}