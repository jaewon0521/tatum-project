import { TABLE_LIST } from "@/app/constants/table-list";
import { BasicSelect } from "../shared/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";

export default function SearchLayer() {
  return (
    <div className="flex items-center gap-2">
      <BasicSelect items={TABLE_LIST} />
      <Input className="w-[150px]" placeholder="Search" />
      <span> | </span>
      <Button variant="outline">
        <Plus strokeWidth={1} size={14} />
        <span>Create Cloud</span>
      </Button>
    </div>
  );
}
