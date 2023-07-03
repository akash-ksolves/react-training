import React from "react";

export default function List({ data }) {
	return (
		<ul className="list-group list-group-flush">
			{data.map(({ message }, index) => (
				<li
					className="list-group-item"
					key={index}
				>
					{message}
				</li>
			))}
		</ul>
	);
}
