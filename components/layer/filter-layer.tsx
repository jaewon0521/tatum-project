import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function FilterLayer() {
  return (
    <div className="flex items-center gap-2 px-3">
      <div className="flex items-center gap-2 text-blue-500">
        <SlidersHorizontal size={14} strokeWidth={3} />
        <span className="text-sm font-extrabold">Filters</span>
      </div>
      <div>|</div>
      <Button variant="secondary">Provider</Button>
      <Button variant="secondary">Account</Button>
      <Button variant="secondary">Status</Button>
      <Button variant="secondary">Region</Button>
      <Button variant="secondary">Cloud Watcher</Button>
    </div>
  );
}
