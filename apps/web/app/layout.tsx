import type { Metadata } from "next";
import { IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import { Geist } from "next/font/google";
import "../styles/globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "三瀬 裕二 — Software Engineer",
  description:
    "クラウド基盤とデータ処理を設計するソフトウェアエンジニア。AWS / Azure OpenAI / GCP / Kubernetes / Terraform / Rust を軸に事業成果へ直結するエンジニアリングを推進。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${playfairDisplay.variable} ${geist.variable} ${ibmPlexMono.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-body), sans-serif",
          backgroundColor: "var(--color-bg)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
