export function Grid({
	children,
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
	return (
		<section className="grid grid-cols-1 auto-rows-fr place-items-center gap-3 md:grid-cols-3">
			{children}
		</section>
	);
}
