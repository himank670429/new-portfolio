import { useState, useEffect } from "react";

// Easing function type
type EasingFunction = (t: number) => number;

// Linear easing function as a default
type defaultEasingFunctionsTypes = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

const easingFunctions : Record<defaultEasingFunctionsTypes, EasingFunction> = {
  linear: (t) => t,
  "ease-in": (t) => t * t,
  "ease-out": (t) => 1 - Math.pow(1 - t, 2),
  "ease-in-out": (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};


type UseAnimatedValueProps = Readonly<{
  from: number;
  to: number;
  duration: number;
  easing?: EasingFunction | defaultEasingFunctionsTypes;
}>

export function useAnimatedValue({
  from,
  to,
  duration,
  easing = 'linear',
}: UseAnimatedValueProps): number {
  const [value, setValue] = useState(from);
  
  // string value is passed into the easing parameter
  let timingFunction : EasingFunction | defaultEasingFunctionsTypes;
  if (typeof easing === 'string'){
    timingFunction = easingFunctions[easing] || easingFunctions.linear;
  }
  else{
    timingFunction = easing;
  }

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / duration;
      const easedProgress = timingFunction(Math.min(progress, 1));

      setValue(from + (to - from) * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Clean up if the component unmounts
      cancelAnimationFrame(start as number);
    };
  }, [from, to, duration, easing]); // Trigger when any of the params change

  return value;
}
