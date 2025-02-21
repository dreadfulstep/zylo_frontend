import { Manrope, Prompt, Inter } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/utils/metadata";
import { getPrimaryColour } from "@/lib/theme";
import { headers } from "next/headers";

const manropeFont = Manrope({ variable: "--font-number", subsets: ["latin"] });
const promptFont = Prompt({ variable: "--font-heading", weight: "700", subsets: ["latin"] });
const interFont = Inter({ variable: "--font-text", subsets: ["latin"] });

export const metadata = generateMetadata();

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieHeader = (await headers()).get("cookie");
  const { hsl, hue } = getPrimaryColour(cookieHeader); 
  const rotatedHue = (Number(hue) - 50 + 360) % 360;

  const rotatedHslValue = `${rotatedHue}, 100%, 50%`;

  return (
    <html
      lang="en"
      style={{
        "--primary": hsl,
        "--hue": hue,
        "--primary-rotated": rotatedHslValue,
      } as React.CSSProperties}
    >
      <body className={`${manropeFont.variable} ${promptFont.variable} ${interFont.variable} bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}