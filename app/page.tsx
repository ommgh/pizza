"use client";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, LayoutDashboard } from "lucide-react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { useSession } from "next-auth/react";

export default function PizzaDashboardLanding() {
	const session = useSession();
	const user = session.data?.user;
	const router = useRouter();

	return (
		<div className="min-h-screen flex flex-col ">
			<header className="w-full px-6 py-3 flex justify-between items-center bg-background/50 backdrop-blur-sm border rounded-lg  mx-auto mt-4 max-w-6xl">
				<div className="text-xl font-bold">PIZZA</div>

				<div className="flex items-center gap-3">
					{user ? (
						<Button
							variant="outline"
							className="flex items-center gap-2"
							onClick={() => router.push("/dashboard")}
						>
							<LayoutDashboard className="w-4 h-4" /> Dashboard
						</Button>
					) : (
						<>
							<Button
								variant="ghost"
								className="flex items-center gap-2"
								onClick={() => router.push("/auth/login")}
							>
								<LogIn className="w-4 h-4" /> Login
							</Button>
							<Button
								className="flex items-center gap-2"
								onClick={() => router.push("/auth/register")}
								size={"sm"}
							>
								<UserPlus className="w-4 h-4" /> Register
							</Button>
						</>
					)}
					<ModeToggle />
				</div>
			</header>
			<main className="flex flex-1 items-center justify-center px-6 py-20 text-center">
				<div className="max-w-2xl">
					<h1 className="text-5xl font-extrabold tracking-tight mb-6 ">
						Manage Orders. Serve Faster. Pizza Perfect.
					</h1>
				</div>
			</main>
		</div>
	);
}
