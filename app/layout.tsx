import "@/styles/globals.css";
import { Header, Footer, MSClarity, Analytics } from "@/components";
import { firaCode } from "@/utils";

export { metadata } from "@/utils";

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${firaCode.variable} font-fira-code`}>
      <body>
        <main className="container mx-auto m-4 h-screen">
          <Header />
          {children}
          <Analytics />
          <MSClarity />
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;