import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Viewport from "../components/Viewport/Viewport";
import Inspector from "../components/Inspector/Inspector";
import BottomPanel from "../components/BottomPanel/BottomPanel";

export default function MainLayout() {
  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-950 text-white">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1">
          <Viewport />
        </div>

        <Inspector />
      </div>

      <BottomPanel />
    </div>
  );
}