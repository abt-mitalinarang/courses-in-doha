"use client"

import { ColumnDef, flexRender, useTable, RowData, stockFeatures, StockFeatures } from "@tanstack/react-table"

interface DataTableProps<TData extends RowData, TValue> {
  columns: Array<ColumnDef<StockFeatures, TData, TValue>>
  data: TData[]
}

export function DataTable<TData extends RowData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useTable({
    key: "person-table",
    features: stockFeatures,
    columns,
    data,
  })

  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <div className="custom-scrollbar w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-gray-200 transition-colors hover:bg-gray-50/50"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="h-10 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 data-[state=selected]:bg-gray-50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="p-4 align-middle text-gray-700 [&:has([role=checkbox])]:pr-0"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
