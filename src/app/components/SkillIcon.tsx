"use client";

import { useState } from "react";

interface SkillIconProps {
	icon: string;
	name: string;
	color: string;
}

export default function SkillIcon({ icon, name, color }: SkillIconProps) {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	return (
		<div
			className={`w-16 h-16 mx-auto mb-3 ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
			{!imageError ? (
				<img
					src={icon}
					alt={`${name} logo`}
					className='w-8 h-8 object-contain'
					onError={handleImageError}
				/>
			) : (
				<div className='w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg'></div>
			)}
		</div>
	);
}
