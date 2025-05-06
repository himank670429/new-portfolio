import { AnimatedLoadingLogo } from "@/components";
import { useState, useEffect, PropsWithChildren } from "react";
import { splashScreenDuration } from "@/constants/defaultValues";

export function SplashScreen(props: PropsWithChildren): JSX.Element {
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
    <div className="relative size-full">
      {/* Splash Screen with fade-out effect */}
      {isLoading && (
        <div
          className={`absolute inset-0 flex justify-center items-center dark:bg-black bg-white transition-opacity duration-500 ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <AnimatedLoadingLogo />
        </div>
      )}

      {/* Children content with slide-up animation */}
      <div
        className={`transition-transform duration-500 ${
          isLoading ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
