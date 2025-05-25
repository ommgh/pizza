"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { FloatingIngredients } from "@/components/landing/floating-ingredients";
import { ModeToggle } from "@/components/mode-toggle";

import {
	Pizza,
	Star,
	ArrowRight,
	LayoutDashboard,
	LogIn,
	UserPlus,
} from "lucide-react";

export default function PizzaDashboardLanding() {
	const session = useSession();
	const user = session.data?.user;
	const router = useRouter();

	return (
		<div className="h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
			<div className="px-4 sm:px-6 mx-auto max-w-6xl">
				<header className="w-full py-3 flex justify-between items-center bg-background/50 backdrop-blur-sm border rounded-lg mt-4">
					<div className="flex items-center space-x-2">
						<Pizza className=" ml-2 w-6 h-6 text-primary" />
						<span className="text-xl font-bold">PIZZA</span>
					</div>

					<div className="flex items-center gap-2 sm:gap-3">
						{user ? (
							<Button
								variant="outline"
								className="flex items-center gap-2 text-xs sm:text-sm"
								onClick={() => router.push("/dashboard")}
								size="sm"
							>
								<LayoutDashboard className="w-4 h-4" />
								<span className="hidden sm:inline">
									Dashboard
								</span>
							</Button>
						) : (
							<>
								<Button
									variant="ghost"
									className="flex items-center gap-2 text-xs sm:text-sm"
									onClick={() => router.push("/auth/login")}
									size="sm"
								>
									<LogIn className="w-4 h-4" />
									<span className="hidden sm:inline">
										Login
									</span>
								</Button>
								<Button
									className="flex items-center gap-2 text-xs sm:text-sm"
									onClick={() =>
										router.push("/auth/register")
									}
									size="sm"
								>
									<UserPlus className="w-4 h-4" />
									<span className="hidden sm:inline">
										Register
									</span>
								</Button>
							</>
						)}
						<ModeToggle />
					</div>
				</header>
			</div>

			<section className="relative flex flex-col items-center justify-center h-[calc(100vh-6rem)] overflow-hidden mt-4">
				<FloatingIngredients />

				<div className="container max-w-4xl px-4 sm:px-6 text-center relative z-10">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight break-words">
						Slice <span className="inline-block">Through</span> The{" "}
						<span className="text-[#e11d48]">Chaos</span>
					</h1>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
						<Button
							size="lg"
							className="px-8 py-4 text-lg"
							onClick={() => router.push("/dashboard")}
						>
							Get Started <ArrowRight className="ml-2 w-5 h-5" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="px-10 py-4 text-lg"
						>
							Watch Demo
						</Button>
					</div>

					<div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-muted-foreground text-sm">
						<div className="flex items-center">
							<Star className="w-5 h-5 text-yellow-400 mr-1" />
							<span>4.9/5 Rating</span>
						</div>
						<div>500+ Pizza Shops</div>
						<div>99.9% Uptime</div>
					</div>
				</div>
			</section>
		</div>
	);
}
