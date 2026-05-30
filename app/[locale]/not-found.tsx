import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFoundPage">
      <p className="eyebrow">404</p>
      <h1>Página no encontrada</h1>
      <p>La página que buscas no existe o fue movida.</p>
      <Link href="/es" className="button button--primary">
        Volver al inicio
      </Link>
    </main>
  );
}