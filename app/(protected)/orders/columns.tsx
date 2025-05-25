"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/app/(protected)/orders/_components/DataTableHeader";
import { Badge } from "@/components/ui/badge";

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
		cell: ({ row }) => {
			const status = row.getValue("status") as string;

			const statusStyles: Record<string, string> = {
				Pending:
					"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
				Preparing:
					"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
				"Out for Delivery":
					"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
				Delivered:
					"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
				Cancelled:
					"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
			};

			return (
				<Badge
					className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${statusStyles[status]}`}
				>
					{status}
				</Badge>
			);
		},
	},
];
