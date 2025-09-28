"use client";

import { ReactNode } from "react";
import { IntlProvider } from "react-intl";

export default function IntlProviderClient({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: "en" | "es";
  messages: Record<string, string>;
}) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
