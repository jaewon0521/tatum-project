import {
  Select as ShadCnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

type TSelectItem = {
  value: string;
  label: string;
};

interface BasicSelectProps {
  items: TSelectItem[];
}

export default function BasicSelect({ items }: BasicSelectProps) {
  return (
    <ShadCnSelect>
      <SelectTrigger>
        <SelectValue placeholder="Select" />
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectTrigger>
    </ShadCnSelect>
  );
}
