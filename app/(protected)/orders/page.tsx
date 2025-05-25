import { AppSidebar } from "@/components/app-sidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { DataTable } from "@/app/(protected)/orders/data-table";
import { columns } from "@/app/(protected)/orders/columns";

async function fetchOrders() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/orders`,
	);

	if (!response.ok) {
		throw new Error("Failed to fetch orders");
	}

	return response.json();
}

export default async function OrdersPage() {
	const orders = await fetchOrders();

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 h-4"
						/>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="/dashboard">
										Home
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>Orders</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>

				<main className="px-4 py-6 w-full max-w-7xl mx-auto">
					<DataTable columns={columns} data={orders} />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
