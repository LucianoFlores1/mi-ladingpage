import { redirect } from 'next/navigation'

// Redirect root to default locale. We use a server redirect so the
// root page doesn't attempt to prerender client-only interactive
// components and avoids build-time prerender errors.
export default function Home() {
  redirect('/en')
}
