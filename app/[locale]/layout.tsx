import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Luciano Rafael Flores - Full Stack Developer",
  description:
    "Full Stack Developer from Salta, Argentina. Experienced in React.js, Node.js, Python, and modern web technologies.",
  generator: "v0.app",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale?: string };
}>) {
  const locale = params?.locale ?? "en";

  // Carga dinámica de mensajes JSON desde la carpeta /locales
  const messages = (await import(`../../locales/${locale}.json`)).default;

  // Import the provider dynamically to avoid type issues when the package is not installed
  const nextIntl = await import("next-intl");
  const NextIntlProvider = (nextIntl as any).NextIntlProvider || (nextIntl as any).IntlProvider || (nextIntl as any).default;

  return (
    <html lang={locale} className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <NextIntlProvider locale={locale} messages={messages}>{children}</NextIntlProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
