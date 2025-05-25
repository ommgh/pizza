"use client";

import { motion } from "framer-motion";

const ingredients = [
	{ emoji: "🍅", delay: 0 },
	{ emoji: "🧀", delay: 0.2 },
	{ emoji: "🍄", delay: 0.4 },
	{ emoji: "🫒", delay: 0.6 },
	{ emoji: "🌶️", delay: 0.8 },
];

export function FloatingIngredients() {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{ingredients.map((ingredient, index) => (
				<motion.div
					key={index}
					initial={{ y: 0 }}
					animate={{ y: [0, -20, 0] }}
					transition={{
						repeat: Infinity,
						duration: 3,
						delay: ingredient.delay,
						ease: "easeInOut",
					}}
					className="absolute"
					style={{
						left: `${20 + index * 15}%`,
						top: `${30 + (index % 2) * 30}%`,
					}}
				>
					<span className="hidden sm:inline text-4xl">
						{ingredient.emoji}
					</span>
				</motion.div>
			))}
		</div>
	);
}
