import Link from "next/link"

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-8 text-center"
    >
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">404</h1>
      <p className="text-lg text-muted-foreground">
        Esta página não existe. / This page does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-[44px] items-center rounded-md bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90"
      >
        A11Y.md
      </Link>
    </main>
  )
}
