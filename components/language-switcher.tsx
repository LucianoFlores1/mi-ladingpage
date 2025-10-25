"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  // If first segment is a locale, replace it; otherwise add locale as first segment
  const makePath = (locale: string) => {
    const copy = [...segments];
    if (copy.length === 0) return `/${locale}`;
    const isLocale = copy[0] === "en" || copy[0] === "es";
    if (isLocale) {
      copy[0] = locale;
    } else {
      copy.unshift(locale);
    }
    return `/${copy.join("/")}`;
  };

  return (
    <div className="flex items-center gap-2">
      <Link href={makePath("en")} className="text-sm px-2 py-1 rounded-md">
        EN
      </Link>
      <Link href={makePath("es")} className="text-sm px-2 py-1 rounded-md">
        ES
      </Link>
    </div>
  );
}
