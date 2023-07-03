import React, { useEffect, useState } from "react";
import Button from "./Button";
import List from "./List";

export default function Data({ title, isRest, btnTitle, btnClass }) {
	const [data, setData] = useState([]);

	async function fetchData() {
		if (isRest) {
			fetch("http://demo6876280.mockable.io/rest-data")
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((err) => console.error(err));
		} else {
			const soapData = [
				{
					message: "sample message for soap",
				},
			];
			setData(soapData);
		}
	}
	return (
		<div className="col">
			<div className="col-6">
				<h5>{title}</h5>

				<Button
					btnName={btnTitle}
					className={btnClass}
					onClickHandler={fetchData}
				/>
				{data && data.length > 0 && <List data={data} />}
			</div>
		</div>
	);
}
