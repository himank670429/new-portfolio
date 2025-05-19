import { HOME } from "@/constants/keys";
import { Contact } from '../Contact';
export function Home() {
  return (
    <section id={HOME}>
      <Info />

      <Contact />
    </section>
  );
}
