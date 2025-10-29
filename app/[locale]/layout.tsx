import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import IntlClientProvider from "@/components/intl-client-provider";

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

  // Importar dinámicamente next-intl y resolver el provider disponible
  let ServerIntlProvider: any = ({ children }: { children: React.ReactNode }) => children;
  try {
    const nextIntl = await import("next-intl");
    ServerIntlProvider =
      (nextIntl as any).IntlProvider ||
      (nextIntl as any).NextIntlProvider ||
      (nextIntl as any).NextIntlClientProvider ||
      (nextIntl as any).default ||
      ServerIntlProvider;
  } catch (e) {
    // si falla, mantenemos el passthrough provider y seguimos
  }

  return (
    <html lang={locale} className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ServerIntlProvider locale={locale} messages={messages}>
          <IntlClientProvider locale={locale} messages={messages}>{children}</IntlClientProvider>
        </ServerIntlProvider>
        <Analytics />
      </body>
    </html>
  );
}
