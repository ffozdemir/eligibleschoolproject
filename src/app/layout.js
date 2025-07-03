import Footer from "@/components/common/footer/Footer";
import MainMenuBar from "@/components/common/header/MainMenuBar";
import Topbar from "@/components/common/header/Topbar";
import { appConfig } from "@/helpers/config";
import { montserrat } from "@/helpers/fonts";
import "@/styles/index.scss";

export const metadata = {
  title: {
    template: `%s | ${appConfig.project.name}`,
    default: appConfig.project.name,
  },
  description: appConfig.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Topbar />
        <MainMenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
