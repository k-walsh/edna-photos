import "../../styles/NavBar.css";
import HamNav from "./HamNav";
import FullscreenNav from "./FullscreenNav";

export default function NavBar() {
  return (
    <div>
      <HamNav />
      <FullscreenNav />
    </div>
  );
}
