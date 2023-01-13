import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Changa_One } from "@next/font/google";
const changaOne = Changa_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-changa",
});
export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
