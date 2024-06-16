import SiginUp from "./page";

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
					<SiginUp />
				</main>
			</body>
		</html>
	);
}
