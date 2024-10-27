import LandingBody from "./components/Landing/LandingBody";
import Background from "./components/Background/Background";

export default function Component() {
  return (
    <div
      className="relative  min-h-screen overflow-hidden text-white"
      style={{ height: "100vh" }}
    >
      <div className="z-0">
        <Background />
      </div>

      <LandingBody />
    </div>
  );
}
