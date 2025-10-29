"use client"

import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    locale: string;
    messages: Record<string, any>;
}

export default function IntlClientProvider({ children, locale, messages }: Props) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
