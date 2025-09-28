import { ReactNode } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntlProviderClient from "@/components/IntlProviderClient";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

async function loadMessages(locale: string) {
  try {
    return (await import(`@/locales/${locale}/index.json`)).default;
  } catch (error) {
    return null;
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!["en", "es"].includes(locale)) notFound();

  const messages = await loadMessages(locale);
  if (!messages) notFound();

  const safeLocale = locale as "en" | "es";

  return (
    <html lang={safeLocale} className="dark">
      <body className="bg-black text-white antialiased">
        <IntlProviderClient locale={safeLocale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </IntlProviderClient>
      </body>
    </html>
  );
}
