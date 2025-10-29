// Request configuration for next-intl (App Router)
// See: https://next-intl.dev/docs/getting-started/app-router

// This file is resolved by the next-intl plugin and used at runtime.
// It must export a default function that returns an object with at least
// a `locale` property. Here we also provide a `messages` loader that
// dynamically imports the locale JSON files placed under /locales.

export default async function getRequestConfig(params) {
  // `params` is provided by next-intl and contains:
  // - params.locale (may be undefined)
  // - params.requestLocale (a getter that resolves the request's locale)
  // We should resolve the effective locale, falling back to 'en' if none found.
  const resolvedLocale = params?.locale ?? (params && params.requestLocale ? await params.requestLocale : undefined) ?? 'en';

  return {
    locale: resolvedLocale,
    // Return an async loader for messages. next-intl will call this
    // when needed. Adjust the path if your locales live in a different folder.
    messages: async () => (await import(`../locales/${resolvedLocale}.json`)).default
  };
}
