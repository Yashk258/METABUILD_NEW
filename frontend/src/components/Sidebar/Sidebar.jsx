import {
  Home,
  Building2,
  DoorOpen,
  Trees,
  Sofa,
  Bot,
} from "lucide-react";

const items = [
  { icon: Home, label: "Generate" },
  { icon: Building2, label: "Floor Plan" },
  { icon: DoorOpen, label: "Doors" },
  { icon: Trees, label: "Landscape" },
  { icon: Sofa, label: "Furniture" },
  { icon: Bot, label: "AI" },
];

export default function Sidebar() {
  return (
    <aside className="w-20 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-4 gap-5">
      {items.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex flex-col items-center text-xs text-zinc-300 hover:text-emerald-400"
        >
          <Icon size={24} />
          <span className="mt-1">{label}</span>
        </button>
      ))}
    </aside>
  );
}