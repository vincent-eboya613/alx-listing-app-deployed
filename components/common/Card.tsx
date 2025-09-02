import React from 'react'
import { CardProps } from '../../interfaces'

export const Card: React.FC<CardProps> = ({ title, imageUrl, children }) => (
	<div className="border rounded-lg overflow-hidden shadow-sm">
		<img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
		<div className="p-4">
			<h2 className="text-lg font-semibold">{title}</h2>
			<div>{children}</div>
		</div>
	</div>
)
