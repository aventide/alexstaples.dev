export default function BoxSection({
	children,
	doubleSpaced = false,
	title = "",
}) {
	return (
		<div>
			<div
				className={`border-2 border-white ${doubleSpaced ? "my-16" : "my-8"}`}
			>
				<span className="font-heading font-bold my-4 ml-8 inline-block text-2xl uppercase">
					{title}
				</span>
			</div>
			{children}
		</div>
	);
}
