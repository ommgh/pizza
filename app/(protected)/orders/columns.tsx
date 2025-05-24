"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/app/(protected)/orders/_components/DataTableHeader";
export const columns: ColumnDef<Orders>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={value =>
					table.toggleAllPageRowsSelected(!!value)
				}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={value => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
	},
	{
		accessorKey: "orderId",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Email" />
		),
	},
	{
		accessorKey: "customerName",
		header: "Customer Name",
	},
	{
		accessorKey: "pizzaType",
		header: "Pizza Type",
	},
	{
		accessorKey: "quantity",
		header: "Quantity",
	},
	{
		accessorKey: "orderDate",
		header: "Order Date",
	},
	{
		accessorKey: "status",
		header: "Status",
	},
];
