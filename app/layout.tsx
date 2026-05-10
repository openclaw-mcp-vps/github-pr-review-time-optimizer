import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Review Time Optimizer – Faster Merges for Engineering Teams",
  description: "Analyze GitHub PR review patterns and get optimal reviewer assignments to minimize merge time."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c83bfae9-8da3-4da8-851d-409dbe51ad2a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
