import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BasicTableProps {
  columns: string[];
  rows: string[][];
}

export default function BasicTable({ columns, rows }: BasicTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, idx) => (
            <TableHead key={`${column}-${idx}`}>
              <span className="text-sm font-bold">{column}</span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, idx) => (
          <TableRow key={`${row}-${idx}`}>
            {row.map((cell, idx) => (
              <TableCell key={`${cell}-${idx}`}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
