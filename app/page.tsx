import { BasicBreadcrumb } from "@/components/shared/breadcrumb";
import FilterLayer from "@/components/layer/filter-layer";
import SearchLayer from "@/components/layer/search-layer";
import BasicTable from "@/components/shared/table/basic-table";
import { BasicTab } from "@/components/shared/tab";
import { CloudManageSearchItems } from "./constants/search-items";
import TableToolbarLayer from "@/components/layer/table-toolbar-layer";

const columns = [
  "Provider",
  "Account",
  "Cloud Group",
  "Organization",
  "Account ID",
  "Status",
  "Scan Schedule",
  "Edit",
  "Delete",
];
const rows = [
  [
    "Cloud 1",
    "AWS",
    "Cloud Group 1",
    "Organization 1",
    "1234567890",
    "Active",
    "Scan Schedule 1",
    "Edit",
    "Delete",
  ],
  [
    "Cloud 2",
    "AWS",
    "Cloud Group 2",
    "Organization 2",
    "1234567890",
    "Active",
    "Scan Schedule 2",
    "Edit",
    "Delete",
  ],
  [
    "Cloud 3",
    "AWS",
    "Cloud Group 3",
    "Organization 3",
    "1234567890",
    "Active",
    "Scan Schedule 3",
    "Edit",
    "Delete",
  ],
];

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="py-2 px-4">
        <div>
          <BasicBreadcrumb title="Cloud Management" />
        </div>
        <h1 className="text-3xl font-bold mt-2 mb-4">Cloud Management</h1>
        <div className="mb-4">
          <BasicTab />
        </div>
        <section className="flex flex-col gap-4 mb-4">
          <SearchLayer items={CloudManageSearchItems} />
          <FilterLayer />
        </section>
        <div className="w-full h-[2px] bg-gray-400 mb-4"></div>
        <section>
          <div className="px-3 mb-6">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 font-semibold">
                Total 71
              </span>
              <TableToolbarLayer />
            </div>
          </div>
          <BasicTable columns={columns} rows={rows} />
        </section>
      </div>
    </div>
  );
}
