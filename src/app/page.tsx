import LandingBody from "./components/Landing/LandingBody";
import Background from "./components/Background/Background";
import Lore from "./components/Lore/Lore";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
export default function Component() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="z-0 overflow-clip">
        <Background />
      </div>
      <div className="max-w-full w-full z-20">
        <Header />
        <LandingBody />
        <Footer />
        <Lore />
      </div>
    </div>
  );
}
