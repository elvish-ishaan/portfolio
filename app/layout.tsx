import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamir Manzoor | Full Stack Developer",
  description: "Portfolio website showcasing my projects, skills, and experience as a Full Stack Developer.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Shamir Manzoor" }],
  openGraph: {
    title: "Shamir Manzoor | Full Stack Developer",
    description: "Portfolio website showcasing my projects, skills, and experience as a Full Stack Developer.",
    type: "website",
    url: "https://your-portfolio-url.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
