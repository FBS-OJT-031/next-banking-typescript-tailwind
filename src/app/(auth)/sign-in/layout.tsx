import SiginIn from "./page";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<main>
					SIDEBAR
					<SiginIn />
				</main>
			</body>
		</html>
	);
}
