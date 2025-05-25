"use client";

import { useEffect, useState } from "react";

const ingredients = [
	{ emoji: "🍅", delay: 0 },
	{ emoji: "🧀", delay: 1 },
	{ emoji: "🍄", delay: 2 },
	{ emoji: "🫒", delay: 3 },
	{ emoji: "🌶️", delay: 4 },
];

export function FloatingIngredients() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{ingredients.map((ingredient, index) => (
				<div
					key={index}
					className="absolute animate-bounce"
					style={{
						left: `${20 + index * 15}%`,
						top: `${30 + (index % 2) * 30}%`,
						bottom: `${10 + (index % 3) * 20}%`,
						animationDelay: `${ingredient.delay}s`,
						animationDuration: "3s",
					}}
				>
					<span className="text-4xl">{ingredient.emoji}</span>
				</div>
			))}
		</div>
	);
}
