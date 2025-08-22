import { Button } from "../ui/button";

export default function TableToolbarLayer() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Global Proxy</Button>
      <Button variant="outline">Register New Cloud</Button>
      <Button variant="outline">Refresh</Button>
      <Button variant="outline">Customize Columns</Button>
    </div>
  );
}
