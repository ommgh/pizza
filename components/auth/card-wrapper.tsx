"use client";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocials?: boolean;
}

export const CardWrapper = ({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocials,
}: CardWrapperProps) => {
	return (
		<Card className="w- border-none bg-background">
			<CardHeader>
				<Header label={headerLabel}></Header>
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocials && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton
					label={backButtonLabel}
					href={backButtonHref}
				></BackButton>
			</CardFooter>
		</Card>
	);
};
