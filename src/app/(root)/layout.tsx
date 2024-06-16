import Home from "./Home";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<main>
					<Home />
					SideBar
				</main>
			</body>
		</html>
	);
}
