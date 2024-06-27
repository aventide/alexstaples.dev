export default function DividerSection({
	children,
	doubleSpaced = false,
	title = "",
}) {
	return (
		<div
			className={`divider before:bg-white after:bg-white before:opacity-10 after:opacity-10 ${
				doubleSpaced ? "my-16" : "my-8"
			}`}
		>
			<span className="font-heading font-bold my-4 inline-block text-2xl uppercase">
				{title}
			</span>
			{children}
		</div>
	);
}
