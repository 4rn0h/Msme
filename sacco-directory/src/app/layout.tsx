import type { Metadata } from "next";
import "./globals.css";
import AIAssistant from "@/components/ai/AIAssistant";

export const metadata: Metadata = {
  title: "MSME - Microfinance Directory - Trusted SACCO & MFI Directory Kenya",
  description: "Find verified Microfinance Institutions and SACCOs in Kenya with transparent interest rates and CBK/SASRA compliance tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
