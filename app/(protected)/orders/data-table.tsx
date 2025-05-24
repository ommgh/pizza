"use client";
import * as React from "react";
import {
	ColumnDef,
	flexRender,
	ColumnFiltersState,
	SortingState,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
	getSortedRowModel,
	getFilteredRowModel,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";

import { DataTablePagination } from "@/app/(protected)/orders/_components/DataTablePagination";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			rowSelection,
		},
	});

	return (
		<div className="w-full space-y-4">
			{/* Filter Dropdown */}
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<Select
					value={
						(table
							.getColumn("status")
							?.getFilterValue() as string) ?? "All"
					}
					onValueChange={value => {
						table
							.getColumn("status")
							?.setFilterValue(
								value === "All" ? undefined : value,
							);
						table.setPageIndex(0);
					}}
				>
					<SelectTrigger className="w-[200px]">
						<SelectValue placeholder="Filter by Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="All">All</SelectItem>
						<SelectItem value="Pending">Pending</SelectItem>
						<SelectItem value="Preparing">Preparing</SelectItem>
						<SelectItem value="Out for Delivery">
							Out for Delivery
						</SelectItem>
						<SelectItem value="Delivered">Delivered</SelectItem>
						<SelectItem value="Cancelled">Cancelled</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Responsive Table */}
			<div className="w-full overflow-x-auto rounded-md border">
				<Table className="min-w-[600px]">
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext(),
												)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() && "selected"
									}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{/* Pagination */}
			<div className="py-2">
				<DataTablePagination table={table} />
			</div>
		</div>
	);
}
