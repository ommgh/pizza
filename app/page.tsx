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
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			<header className="w-full px-4 sm:px-6 py-3 flex justify-between items-center bg-background/50 backdrop-blur-sm border rounded-lg mx-auto mt-4 max-w-6xl">
				<div className="flex items-center space-x-2">
					<Pizza className="w-6 h-6 text-primary" />
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
							<span className="hidden sm:inline">Dashboard</span>
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
								<span className="hidden sm:inline">Login</span>
							</Button>
							<Button
								className="flex items-center gap-2 text-xs sm:text-sm"
								onClick={() => router.push("/auth/register")}
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

			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<FloatingIngredients />
				<div className="container mx-auto px-4 text-center relative z-10">
					<div
						className={`transition-all duration-1000  "opacity-100 translate-y-0"`}
					>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
							Slice Through the
							<span className="text-red-600"> Chaos</span>
						</h1>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
							<Button size="lg" className="px-8 py-4 text-lg">
								Start Free Trial{" "}
								<ArrowRight className="ml-2 w-5 h-5" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="px-8 py-4 text-lg"
							>
								Watch Demo
							</Button>
						</div>
						<div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-muted-foreground">
							<div className="flex items-center">
								<Star className="w-5 h-5 text-yellow-400 mr-1" />
								<span>4.9/5 Rating</span>
							</div>
							<div>500+ Pizza Shops</div>
							<div>99.9% Uptime</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
