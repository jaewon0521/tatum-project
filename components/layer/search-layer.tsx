import { BasicSelect } from "../shared/select";
import { TSelectItem } from "../shared/select/basic-select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";

interface SearchLayerProps {
  items: TSelectItem[];
}

export default function SearchLayer({ items }: SearchLayerProps) {
  return (
    <div className="flex items-center gap-2">
      <BasicSelect items={items} />
      <Input className="w-[150px]" placeholder="Search" />
      <span> | </span>
      <Button variant="outline">
        <Plus strokeWidth={1} size={14} />
        <span>Create Cloud</span>
      </Button>
    </div>
  );
}
