import { Save, Download, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-14 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-5">
      <h1 className="text-xl font-bold text-emerald-400">
        MetaBuild
      </h1>

      <div className="flex gap-5">
        <Save className="cursor-pointer" />
        <Download className="cursor-pointer" />
        <Settings className="cursor-pointer" />
      </div>
    </header>
  );
}