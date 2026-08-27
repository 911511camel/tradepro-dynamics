import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title: "TradePro Dynamics Corp. | Global Trade, Commodities & Infrastructure", description: "Philippine commodities, infrastructure investment and humanitarian partnerships."};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){return <html lang="en"><body>{children}</body></html>;}
