"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, Suspense } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

const VerificationContent = () => {
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const onSubmit = useCallback(() => {
		if (!token) {
			setError("Missing token");
			return;
		}
		newVerification(token)
			.then(data => {
				setError(data.error || null);
				setSuccess(data.success || null);
			})
			.catch(() => {
				setError("Something went wrong");
			});
	}, [token]);

	useEffect(() => {
		onSubmit();
	}, [onSubmit]);

	return (
		<div className="flex items-center w-full justify-center">
			{!success && !error && <BeatLoader />}
			<FormSuccess message={success || undefined} />
			<FormError message={error || undefined} />
		</div>
	);
};

const VerificationFallback = () => {
	return (
		<div className="flex items-center w-full justify-center">
			<BeatLoader />
		</div>
	);
};

export const NewVerificationForm = () => {
	return (
		<CardWrapper
			headerLabel="Verify your email"
			backButtonHref="/auth/login"
			backButtonLabel="Back to login"
		>
			<Suspense fallback={<VerificationFallback />}>
				<VerificationContent />
			</Suspense>
		</CardWrapper>
	);
};
