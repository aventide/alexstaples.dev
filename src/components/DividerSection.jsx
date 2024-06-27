export default function DividerSection({ children, doubleSpaced = false }) {
	return (
		<div
			className={`divider before:bg-white after:bg-white before:opacity-10 after:opacity-10 ${
				doubleSpaced ? "my-16" : "my-8"
			}`}
		>
			{children}
		</div>
	);
}
