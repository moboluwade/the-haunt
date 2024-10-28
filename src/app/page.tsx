import LandingBody from "./components/Landing/LandingBody";
import Background from "./components/Background/Background";
import Lore from "./components/Lore/Lore";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer"
export default function Component() {
  return (
    <div className="relative min-h-screen overflow-hidden overflow-y-scroll bg-black text-white">
      <div className="z-0">
        <Background />
      </div>
      <div className="max-w-full w-full">
        <Header />
      </div>

      <LandingBody />
      <Footer />
      <Lore />
    </div>
  );
}
