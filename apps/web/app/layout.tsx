import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Silkscreen } from "next/font/google"

import "./globals.css"
import { PhoneTop } from "@/components/phone-top"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TabBar } from "@/components/tab-bar"
import { ThemeProvider } from "@/components/theme"

const pixel = Silkscreen({ subsets: ["latin"], weight: "400", variable: "--font-pixel" })
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" })
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: { default: "jakehowden.com", template: "%s — jakehowden.com" },
}

// Runs before paint: apply saved palette/theme cookies, ignoring unknown values.
const themeScript = `(function(){var h=document.documentElement,c={};document.cookie.split("; ").forEach(function(p){var i=p.indexOf("=");c[p.slice(0,i)]=p.slice(i+1)});if(["green","amber","blue","red","violet","ink"].indexOf(c.palette)>-1)h.setAttribute("data-palette",c.palette);if(c.theme==="light"||c.theme==="dark")h.setAttribute("data-theme",c.theme)})()`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-palette="green"
      data-theme="light"
      suppressHydrationWarning
      className={`${pixel.variable} ${inter.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <div className="site">
            <div className="d-only">
              <SiteHeader />
            </div>
            <div className="m-only m">
              <PhoneTop />
            </div>
            {children}
            {/* Phone pages render <SiteFooter/> inside their .m-page, as on the boards. */}
            <div className="d-only">
              <SiteFooter />
            </div>
            <div className="m-only m">
              <TabBar />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
