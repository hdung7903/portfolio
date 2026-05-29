import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-desc">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get
          you back on track.
        </p>
        <Link href="/" className="btn-primary">
          Return home →
        </Link>
      </div>
    </div>
  );
}
