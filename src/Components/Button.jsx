function Button({ className, btnName, onClickHandler }) {
	return (
		<button
			type="button"
			className={className}
			onClick={() => onClickHandler()}
		>
			{btnName}
		</button>
	);
}

export default Button;
