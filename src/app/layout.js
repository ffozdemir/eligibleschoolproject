import { appConfig } from "@/helpers/config";

export const metadata = {
	title: {
		template: `%s | ${appConfig.project.name}`,
		default: appConfig.project.name,
	},
	description: appConfig.project.description,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				
				{children}
			
			</body>
		</html>
	);
}
