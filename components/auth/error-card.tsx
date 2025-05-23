import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

export const ErrorCard = () => {
	return (
		<Card className="h-screen flex items-center justify-center">
			<CardHeader>
				<Header label="Oops! Something went wrong" />
			</CardHeader>
			<CardFooter>
				<BackButton label="Back to login" href="/auth/login" />
			</CardFooter>
		</Card>
	);
};
