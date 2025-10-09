import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <main className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/" className="btn primary">
          Go Home
        </Link>
      </main>
    </div>
  );
}

