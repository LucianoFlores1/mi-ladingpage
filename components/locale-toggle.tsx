"use client"

import React from "react"
import { usePathname, useRouter } from "next/navigation"

export default function LocaleToggle() {
    const pathname = usePathname() || "/"
    const router = useRouter()

    const segments = pathname.split("/").filter(Boolean)
    const current = segments[0] === "es" ? "es" : "en"
    const target = current === "es" ? "en" : "es"

    const makePath = (locale: string) => {
        const copy = [...segments]
        if (copy.length === 0) return `/${locale}`
        const isLocale = copy[0] === "en" || copy[0] === "es"
        if (isLocale) {
            copy[0] = locale
        } else {
            copy.unshift(locale)
        }
        return `/${copy.join("/")}`
    }

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault()
        const to = makePath(target)
        // Use router.push so navigation stays client-side
        router.push(to)
    }

    return (
        <button
            onClick={handleToggle}
            aria-label={`Cambiar idioma a ${target === "es" ? "Español" : "English"}`}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border transition-colors text-sm font-medium ${current === "es" ? "bg-white/5 border-white/10" : "bg-transparent border-transparent"
                }`}
        >
            <span className="sr-only">Cambiar idioma</span>
            <span className="uppercase">{target}</span>
        </button>
    )
}
