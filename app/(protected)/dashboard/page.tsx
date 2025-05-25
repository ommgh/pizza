"use client";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

export default function Page() {
	const session = useSession();
	const name = session.data?.user.name || "";
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
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="#">Home</BreadcrumbLink>
							</BreadcrumbItem>
						</Breadcrumb>
					</div>
				</header>
				<div className="flex items-center justify-center h-full">
					<div>
						<h1 className="text-4xl font-bold text-center flex flex-col sm:flex-row sm:gap-3">
							<span>Welcome,</span>
							<span className="text-red-600">
								{name || "Guest"}!
							</span>
						</h1>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
