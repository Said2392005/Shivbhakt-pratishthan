import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य | Shivbhakt Pratishthan",
  description:
    "शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य — छत्रपती शिवाजी महाराजांच्या आदर्शांनी प्रेरित, अनिकेत भाऊ घुले यांनी स्थापित. महाराष्ट्राच्या ३६ जिल्ह्यांमध्ये समाजसेवा, युवा नेतृत्व, शिक्षण आणि पर्यावरण संरक्षणासाठी समर्पित.",
  keywords: [
    "शिवभक्त प्रतिष्ठाण",
    "Shivbhakt Pratishthan",
    "महाराष्ट्र समाजसेवा",
    "अनिकेत भाऊ घुले",
    "युवा नेतृत्व प्रशिक्षण",
    "YLTP महाराष्ट्र",
    "रक्तदान महाराष्ट्र",
    "स्वयंसेवक संस्था",
    "Maharashtra NGO",
    "सामाजिक संस्था महाराष्ट्र",
  ],
  authors: [{ name: "शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य" }],
  openGraph: {
    title: "शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य",
    description:
      "महाराष्ट्रात समाजसेवा, युवा सशक्तीकरण, शिक्षण आणि पर्यावरण संरक्षणासाठी समर्पित बिनराजकीय सामाजिक संस्था.",
    type: "website",
    locale: "mr_IN",
    siteName: "शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य",
  },
  twitter: {
    card: "summary_large_image",
    title: "शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य",
    description:
      "महाराष्ट्रात शिक्षण, पर्यावरण, आरोग्य आणि सामुदायिक कल्याणासाठी सेवारत.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
